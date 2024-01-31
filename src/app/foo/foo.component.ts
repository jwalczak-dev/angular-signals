import {Component, computed, input, Input} from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  template: `
    <p>foo works!!!</p>
    <p>Passed value from parent minus 1: {{valueMinusOne()}}</p>
  `,
  styleUrl: './foo.component.scss'
})
export class FooComponent {

  value = input.required<number>();
  valueMinusOne = computed(() => {
    return this.value() - 1;
  })


}
