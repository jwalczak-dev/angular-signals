import {Component, effect, input, Input} from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  // public todos = [
  //   {
  //     id: 0,
  //     title: 'task1',
  //     description: 'Do shopping',
  //     status: 'todo'
  //   },
  //   {
  //     id: 1,
  //     title: 'task2',
  //     description: 'Clean room',
  //     status: 'inProgress'
  //   },
  //   {
  //     id: 2,
  //     title: 'task3',
  //     description: 'Make a diner',
  //     status: 'inProgress'
  //   },
  //   {
  //     id: 3,
  //     title: 'task4',
  //     description: 'Read a book',
  //     status: 'inProgress'
  //   },
  //   {
  //     id: 4,
  //     title: 'task5',
  //     description: 'Write a letter',
  //     status: 'Done'
  //   },
  //
  // ]

  todos: any = input();
  name: any = input();

  constructor() {
    effect(() => {
      console.log('TODO Name is:', this.name());
    })
  }

}
