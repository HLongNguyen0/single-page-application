import { NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    imports: [NgStyle],
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
  })
  export class SummaryComponent {
    @Input() page!: {prevPage: number, currPage: number};
    @Input() pageIndex!: number;
  }
  