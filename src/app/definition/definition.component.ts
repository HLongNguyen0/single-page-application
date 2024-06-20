import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgStyle, NgFor, NgIf],
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrl: './definition.component.scss',
})
export class DefinitionComponent {
  @Input() page!: { prevPage: number; currPage: number };
  @Input() pageIndex!: number;

  example = false;
  spaExample = {
    header: { current: 0, arr: ['Home', 'Cats', 'Dogs', 'Memes'] },
    img: { current: 0, text: ['Click me', 'Click me !', 'CLICK ME !!!'] },
  };
  tpaExample = {
    header: { current: 0, arr: ['Home', 'Cats', 'Dogs', 'Memes'] },
    img: { current: 0, text: ['Click me', 'Click me !', 'CLICK ME !!!'] },
  };
  spaSrc =
    'imgs/' +
    this.spaExample.header.arr[this.spaExample.header.current] +
    this.spaExample.img.current +
    '.jpg';
  tpaSrc =
    'imgs/' +
    this.spaExample.header.arr[this.spaExample.header.current] +
    this.spaExample.img.current +
    '.jpg';
  spaLoader = false;
  tpaLoader = false;

  spaText =
    'A Single Page Application is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.';
  tpaText =
    'In traditional web applications, navigating between different pages requires loading entire new pages. SPAs, however, load a single HTML page and dynamically update content as the user interacts with the app.';
  colorPalete = [
    '#6df4e7',
    '#797bbf',
    '#d196f9',
    '#3707c9',
    '#255338',
    '#90a98c',
    '#e5034e',
    '#f08366',
    '#43b362',
  ];

  onHeaderClick(type: string, header: string) {
    if (
      type == 'spa' &&
      this.spaExample.header.current !==
        this.spaExample.header.arr.findIndex((elem) => elem == header)
    ) {
      this.spaLoader = true;
      this.spaExample.header.current = this.spaExample.header.arr.findIndex(
        (elem) => elem == header,
      );
      this.spaExample.img.current = 0;
      this.spaSrc =
        'imgs/' +
        this.spaExample.header.arr[this.spaExample.header.current] +
        this.spaExample.img.current +
        '.jpg';
      setTimeout(() => {
        this.spaLoader = false;
      }, 500);
    }
    if (type == 'tpa') {
      this.tpaLoader = true;
      this.tpaExample.header.current = this.tpaExample.header.arr.findIndex(
        (elem) => elem == header,
      );
      this.tpaExample.img.current = 0;
      this.tpaSrc =
        'imgs/' +
        this.tpaExample.header.arr[this.tpaExample.header.current] +
        this.tpaExample.img.current +
        '.jpg';
      setTimeout(() => {
        this.tpaLoader = false;
      }, 500);
    }
  }
  onTextClick(type: string) {
    if (type == 'spa') {
      this.spaLoader = true;
      this.spaExample.img.current++;
      if (this.spaExample.img.current > 2) this.spaExample.img.current = 0;
      this.spaSrc =
        'imgs/' +
        this.spaExample.header.arr[this.spaExample.header.current] +
        this.spaExample.img.current +
        '.jpg';
      setTimeout(() => {
        this.spaLoader = false;
      }, 500);
    }
    if (type == 'tpa') {
      this.tpaLoader = true;
      this.tpaExample.img.current++;
      if (this.tpaExample.img.current > 2) this.tpaExample.img.current = 0;
      this.tpaSrc =
        'imgs/' +
        this.tpaExample.header.arr[this.tpaExample.header.current] +
        this.tpaExample.img.current +
        '.jpg';
      setTimeout(() => {
        this.tpaLoader = false;
      }, 500);
    }
  }
}
