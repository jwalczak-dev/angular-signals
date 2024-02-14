import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {NgIf} from "@angular/common";

@Directive({
  standalone: true,
  selector: 'pane'
})
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Pane, NgIf],
  template: `
    <p>home works!!!</p>
    <p>Test Paragraph</p>
    <p #testParagraph>Test Paragraph 2</p>

    <pane id="pane1"></pane>
    <pane id="pane2"></pane>
    <pane id="pane3" *ngIf="shouldShow"></pane>

    <button (click)="toggle()">Toggle</button>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('testParagraph', {static: true}) testParagraph: ElementRef | undefined;
  @ViewChildren(Pane) panes: QueryList<Pane> | undefined;

  shouldShow = false;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }

  ngAfterViewInit() {
    console.log(this.testParagraph?.nativeElement.innerHTML);

    this.panes?.changes.subscribe((value) => {
      console.log(value)
      value.forEach((pane: Pane) => {
        console.log(pane.id);
      });
    })
  }

}
