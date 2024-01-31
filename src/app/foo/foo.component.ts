import {Component, computed, input, Input} from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent {

  value = input.required<number>();

  valueMinusOne = computed(() => {
    return this.value() - 1;
  })


}
