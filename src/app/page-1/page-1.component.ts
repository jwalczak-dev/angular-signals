import {Component, computed, effect, inject, Signal} from '@angular/core';
import {DataService} from "../data.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-1',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './page-1.component.html',
  styleUrl: './page-1.component.scss'
})
export class Page1Component {

  #dataService = inject(DataService);

  #doubleValue: Signal<number>;

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
