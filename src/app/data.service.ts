import {computed, effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  count = signal(0)

  constructor() {
    console.log('Data service start');
    effect(() => {
      console.log(`Effect from data service - count value ${this.count()}`)
    });

    const tripleValue = computed(() => {
      console.log('TripleValue computed from data service');
      return this.count() * 3;
    })

    console.log('TripleValue console.log from data-service', tripleValue());
  }
}
