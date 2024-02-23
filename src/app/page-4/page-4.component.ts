import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";

export type Book = {
  id: number;
  name: string;
}

@Component({
  selector: 'app-page-4',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <p>page-4 works!</p>
    <br/>
    <div *ngIf="bookShelf()?.length">
      <h3>Bookshelf</h3>
      <p *ngFor="let book of bookShelf()">{{ book.name }}</p>
    </div>

    <br/>
    <br/>
    <div *ngIf="uncleBobBooks()?.length">
      <h3>Uncle Bob Books</h3>
      <p *ngFor="let book of uncleBobBooks()">{{ book.name }}</p>
    </div>

    <br/>
    <br/>
    <div *ngIf="selectedBooks()?.length">
      <h3>Books in basket</h3>
      <p *ngFor="let book of selectedBooks()">{{ book.name }}</p>
    </div>
  `,
  styleUrl: './page-4.component.scss'
})
export class Page4Component {

  bookShelf: WritableSignal<Book[] | null> = signal(null)
  basket: WritableSignal<number[]> = signal([66, 11, 9])

  uncleBobBooks: Signal<Book[] | undefined> = computed(
    () => this.bookShelf()?.filter((book: Book) => book.name.includes('Clean'))
  )

  selectedBooks: Signal<Book[] | undefined> = computed(
    () => {
      return this.bookShelf()?.filter((book: Book) => this.basket().includes(book.id))
    }
  )

  constructor() {
    this.#populateBookshelf();

    setTimeout((): void => {
      this.basket.update((val: number[]) => [...val, 3]);
    }, 2500);

    setTimeout((): void => {
      this.bookShelf?.update((val: Book[] | null): Book[] => val ? [...val, {id: 9, name: 'Clean coder'}] : [{id: 9, name: 'Clean coder'}])
    }, 5000);

    effect((): void => {
      this.#consoleLogBookshelf(this.bookShelf());
    })

    effect((): void => {
      this.#consoleLogBasket(this.basket());
    })
  }

  #consoleLogBookshelf(books: Book[] | null): void {
    console.log(`Bookshelf`);
    console.log(books);
  }

  #consoleLogBasket(basket: number[]): void {
    console.log(`Basket`);
    console.log(basket);
  }

  #populateBookshelf(): void {
    this.bookShelf.set([
      {id: 3, name: 'Clean code'},
      {id: 5, name: 'Clean architecture'},
      {id: 66, name: 'Art of war'},
      {id: 11, name: 'Algorithms and data structures'},
      {id: 8, name: 'Refactoring JavaScript'},
    ])
  }
}
