import { NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    imports: [NgStyle],
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.scss',
  })
  export class IntroductionComponent {
    @Input() page!: {prevPage: number, currPage: number};
    @Input() pageIndex!: number;
  }
  