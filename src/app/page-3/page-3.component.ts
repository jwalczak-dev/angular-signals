import { Component } from '@angular/core';
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

}
