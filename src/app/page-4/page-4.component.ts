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

    <br/>
    <br/>
    <div *ngIf="selected()?.length">
      <h3>Selected Books</h3>
      <p *ngFor="let book of selected()">{{book.name}}</p>
    </div>

  `,
  styleUrl: './page-4.component.scss'
})
export class Page4Component {

  books: WritableSignal<{id: number, name: string}[] | null> = signal(null)
  basket = signal([66, 11, 9])

  uncleBobBooks = computed(
    () => this.books()?.filter((book) => book.name.includes('Clean'))
  )

  selected = computed(
    () => {
      return this.books()?.filter((book) => this.basket().includes(book.id))
    }
  )

  constructor() {
    this.#populateBooks();
    console.log(this.books())
    console.log(this.basket()[0]);

    setTimeout(() => {
      this.basket.update(val => [...val, 3]);
    }, 5000)

    setTimeout(() => {
      this.books?.update((val) => val ? [...val, {id: 9, name: 'Clean coder'}] : [{id: 9, name: 'Clean coder'}])
    }, 10000)

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
