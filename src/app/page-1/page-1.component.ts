import {Component, computed, effect, inject, Signal} from '@angular/core';
import {DataService} from "../data.service";
import {RouterLink} from "@angular/router";
import {FooComponent} from "../foo/foo.component";

@Component({
  selector: 'app-page-1',
  standalone: true,
  imports: [
    RouterLink,
    FooComponent
  ],
  template: `
    <p>page-1 works!</p>
    <button class="button" (click)="increase()">Increase count!</button>
    <p>Count value: {{count()}}</p>
    <p>1 Double count value: {{dblVal()}}</p>
    <p>2 Double count value: {{dblVal()}}</p>
    <p>3 Double count value: {{dblVal()}}</p>
    <app-foo [value]="dblVal()"></app-foo>
  `,
  styleUrl: './page-1.component.scss'
})
export class Page1Component {

  #dataService = inject(DataService);

  #doubleValue: Signal<number>;

  count = this.#dataService.count.asReadonly();
  dblVal: Signal<number>;

  constructor() {

    console.log('Page-1 component start');

    this.#dataService.count.update(current => current + 1);
    this.#dataService.count.update(current => current + 1);
    this.#dataService.count.update(current => current + 1);

    effect(() => {
      console.log(`Effect from Page-1 component - count value ${this.#dataService.count()}`);
    });

    this.#doubleValue = computed(() => {
      console.log('DoubleValue computed from page-1');
      return this.#dataService.count() * 2;
    })

    this.dblVal = this.#doubleValue;


    console.log('First DoubleValue console.log from page-1', this.#doubleValue());
    this.#dataService.count.update(current => current + 1);
    console.log('Second DoubleValue console.log from page-1', this.#doubleValue());

  }

  increase() {
    this.#dataService.count.update(current => current + 1);
    console.log('Increase DoubleValue console.log from page-1', this.#doubleValue());
    console.log('Increase count console.log from page-1', this.#dataService.count());
  }
}
