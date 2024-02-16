import {Component, effect, signal} from '@angular/core';
import {TodoComponent} from "../todo/todo.component";

export type Todo = {
  id: number,
  title: string,
  description: string,
  status: TaskStatus
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'inProgress',
  DONE = 'done'
}

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

    const todos: Todo[] = [
      {
        id: 0,
        title: 'task1',
        description: 'Do shopping',
        status: TaskStatus.TODO
      },
      {
        id: 1,
        title: 'task2',
        description: 'Clean room',
        status: TaskStatus.IN_PROGRESS
      },
      {
        id: 2,
        title: 'task3',
        description: 'Make a diner',
        status: TaskStatus.IN_PROGRESS
      },
      {
        id: 3,
        title: 'task4',
        description: 'Read a book',
        status: TaskStatus.IN_PROGRESS
      },
      {
        id: 4,
        title: 'task5',
        description: 'Write a letter',
        status: TaskStatus.DONE
      },

    ];

    this.todos.set(todos)
  }

}
