import {Component, computed, model} from '@angular/core';
import {reset} from "ansi-colors";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-baz',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <div>
      <p>baz works!</p>
      <input type="text" [(ngModel)]="name">

      <p>{{greetings()}}</p>
      <button (click)="reset()">Reset!</button>
    </div>

  `,
  styleUrl: './baz.component.scss'
})
export class BazComponent {
  name = model('test');

  greetings = computed(() => {
    return 'Hello ' + this.name();
  });

  reset() {
    this.name.set('test2');
  }
}
