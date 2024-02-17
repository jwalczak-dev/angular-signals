import {Component, computed, effect, inject, Signal} from '@angular/core';
import {DataService} from "../data.service";
import {RouterLink} from "@angular/router";
import {FooComponent} from "../foo/foo.component";
import {BarComponent} from "../bar/bar.component";

@Component({
  selector: 'app-page-1',
  standalone: true,
  imports: [
    RouterLink,
    FooComponent,
    BarComponent
  ],
  template: `
    <p>page-1 works!</p>
    <button class="button" (click)="increase()">Increase count!</button>
    <p>Count value: {{count()}}</p>
    <p>1 Double count value: {{dblVal()}}</p>
    <p>Price from effect: {{price}}</p>
    <app-foo [value]="dblVal()" [data]="fooData"></app-foo>
    <app-bar></app-bar>
  `,
  styleUrl: './page-1.component.scss'
})
export class Page1Component {

  #dataService = inject(DataService);

  #doubleValue: Signal<number>;

  count = this.#dataService.count.asReadonly();
  dblVal: Signal<number>;

  fooData = '';
  price: number | undefined;

  constructor() {

    console.log('Page-1 component start');

    this.#dataService.count.update(current => current + 1);

    effect(() => {
      console.log(`Effect from Page-1 component - count value ${this.#dataService.count()}`);
      this.price = this.#calculate(this.#dataService.count());
    });

    this.#doubleValue = computed(() => {
      console.log('DoubleValue computed from page-1');
      return this.#dataService.count() * 2;
    })

    this.dblVal = this.#doubleValue;

  }

  #calculate(value: number): number {
    return value + (value * 0.02);
  }

  increase() {
    this.#dataService.count.update(current => current + 1);
    this.fooData = 'fooData' + this.#dataService.count();
  }
}
