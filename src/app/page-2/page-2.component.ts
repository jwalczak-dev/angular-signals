import {Component, effect, inject} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-page-2',
  standalone: true,
  imports: [],
  template: `
    <p>page-2 works!</p>
    <p>Count: {{count()}}</p>
  `,
  styleUrl: './page-2.component.scss'
})
export class Page2Component {

  #dataService = inject(DataService);

  count = this.#dataService.count;

  constructor() {
    effect(() => {
      console.log(`Effect from Page-2 component - count value ${this.#dataService.count()}`)
    });
  }

}
