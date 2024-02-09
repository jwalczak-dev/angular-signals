import {Component, computed, input, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  template: `
    <p>foo works!!!</p>
    <p>Passed value from parent minus 1: {{valueMinusOne()}}</p>
    <p>Value string: {{valueString()}}</p>
  `,
  styleUrl: './foo.component.scss'
})
export class FooComponent implements OnChanges {

  @Input({required: true}) data!: string;

  value = input.required<number>();
  valueString = computed(() => {
    return 'VALUE FOO ' + this.value();
  })

  valueMinusOne = computed(() => {
    return this.value() - 1;
  })

  ngOnChanges(changes: SimpleChanges) {
    if(changes['data'].currentValue) {
      console.log('DATA FOO:', changes['data'].currentValue)
    }
  }


}
