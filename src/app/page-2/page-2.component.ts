import {Component, effect, inject} from '@angular/core';
import {DataService} from "../data.service";
import {BazComponent} from "../baz/baz.component";
import {SignalCounterComponent} from "../signal-counter/signal-counter.component";

@Component({
  selector: 'app-page-2',
  standalone: true,
  imports: [
    BazComponent,
    SignalCounterComponent
  ],
  template: `
    <p>page-2 works!</p>
    <p>Count: {{serviceCount()}}</p>
    <p>Name from baz: {{nameFromBaz}}<button (click)="reset()">Reset!</button></p>
    <app-baz [(name)]="nameFromBaz"></app-baz>
    <br/>
    <br/>
    <p>Parent counter: {{parentCounter}}</p>
    <app-signal-counter [(count)]="parentCounter" (countChange)="onCountChange($event)"></app-signal-counter>
  `,
  styleUrl: './page-2.component.scss'
})
export class Page2Component {

  #dataService = inject(DataService);

  serviceCount = this.#dataService.count;

  nameFromBaz = ''

  parentCounter: any = 0;

  constructor() {

    effect(() => {

      console.log(`Effect from Page-2 component - count value ${this.#dataService.count()}`)
    });
  }

  reset() {
    this.nameFromBaz = '';
  }

  onCountChange($event: any) {
    console.log($event)
  }
}
