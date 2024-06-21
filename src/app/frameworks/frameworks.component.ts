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
    'Eine Single Page Application ist eine Webanwendung oder Website, die durch das dynamische Umschreiben der aktuellen Seite mit dem Benutzer interagiert, anstatt ganze neue Seiten vom Server zu laden';
  tpaText =
    'In traditionellen Webanwendungen erfordert die Navigation zwischen verschiedenen Seiten das Laden komplett neuer Seiten. SPAs hingegen laden eine einzige HTML-Seite und aktualisieren den Inhalt dynamisch, wenn der Benutzer mit der App interagiert.';
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
