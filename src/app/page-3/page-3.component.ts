import {Component, effect, signal} from '@angular/core';
import {TodoComponent} from "../todo/todo.component";

@Component({
  selector: 'app-page-3',
  standalone: true,
  imports: [
    TodoComponent
  ],
  templateUrl: './page-3.component.html',
  styleUrl: './page-3.component.scss'
})
export class Page3Component {

  name = signal('Jakub');
  todos = signal<any>([]);

  constructor() {
    effect(() => {
      console.log('Name is:', this.name());
    })

    const todos = [
      {
        id: 0,
        title: 'task1',
        description: 'Do shopping',
        status: 'todo'
      },
      {
        id: 1,
        title: 'task2',
        description: 'Clean room',
        status: 'inProgress'
      },
      {
        id: 2,
        title: 'task3',
        description: 'Make a diner',
        status: 'inProgress'
      },
      {
        id: 3,
        title: 'task4',
        description: 'Read a book',
        status: 'inProgress'
      },
      {
        id: 4,
        title: 'task5',
        description: 'Write a letter',
        status: 'Done'
      },

    ];

    this.todos.set(todos)
  }

}
