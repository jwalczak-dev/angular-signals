import {Component, effect, model, ModelSignal} from '@angular/core';
import {count} from "rxjs";

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [],
  template: `
    <div class="counter">
      <div>Counter value: {{count()}}</div>
      <button (click)="onIncrement()">Increment</button>
    </div>
  `,
  styleUrl: './signal-counter.component.scss'
})
export class SignalCounterComponent {

  count: ModelSignal<number> = model(0)

  onIncrement() {
    this.count.update(value => value! + 1);
  }

}
