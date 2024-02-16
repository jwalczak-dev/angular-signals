import {Component, effect, input} from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todos: any = input();
  name: any = input();

  constructor() {
    effect(() => {
      console.log('TODO Name is:', this.name());
    })
  }

}
