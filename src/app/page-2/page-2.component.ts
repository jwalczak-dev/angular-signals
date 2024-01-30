import {Component, effect, inject} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-page-2',
  standalone: true,
  imports: [],
  templateUrl: './page-2.component.html',
  styleUrl: './page-2.component.scss'
})
export class Page2Component {

  #dataService = inject(DataService)

  constructor() {
    console.log('Page-2 component start');

    this.#dataService.count.update(current => current + 1);

    effect(() => {
      console.log(`Effect from Page-2 component - count value ${this.#dataService.count()}`)
    });
  }

}
