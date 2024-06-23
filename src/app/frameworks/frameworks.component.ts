import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgStyle, NgFor, NgIf],
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrl: './frameworks.component.scss',
})
export class FrameworksComponent {
  @Input() page!: { prevPage: number; currPage: number };
  @Input() pageIndex!: number;
}
