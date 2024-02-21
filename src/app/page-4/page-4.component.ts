import {Component, computed, signal, WritableSignal} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-page-4',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <p>page-4 works!</p>
    <div *ngIf="books()?.length">
      <h3>Shelf</h3>
      <p *ngFor="let book of books()">{{book.name}}</p>
    </div>

    <br/>
    <br/>
    <div *ngIf="uncleBobBooks()?.length">
      <h3>Uncle Bob Books</h3>
      <p *ngFor="let book of uncleBobBooks()">{{book.name}}</p>
    </div>

  `,
  styleUrl: './page-4.component.scss'
})
export class Page4Component {

  books: WritableSignal<{id: number, name: string}[] | null> = signal(null)
  basket = signal([{id: 66}, {id: 11}])

  uncleBobBooks = computed(
    () => this.books()?.filter((book) => book.name.includes('Clean'))
  )

  constructor() {
    this.#populateBooks();
    console.log(this.books())

  }

  #populateBooks() {
    this.books.set([
      {id: 3, name: 'Clean code'},
      {id: 5, name: 'Clean architecture'},
      {id: 66, name: 'Art of war'},
      {id: 11, name: 'Algorithms and data structures'},
      {id: 8, name: 'Refactoring JavaScript'},
    ])
  }

}
