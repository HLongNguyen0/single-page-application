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

  title = 'Wie SPAs funktionieren'
  text = [
    {
      title: 'Initiales Laden',
      text: 'Der Server sendet die gesamte Anwendungsstruktur, einschließlich HTML, CSS und JavaScript für das initiale Rendering. Dieses initiale Laden richtet die Grundstruktur und Funktionalität der App ein.'
    },
    {
      title: 'Dynamisches Laden von Inhalten',
      text: 'Anstatt Seiten neu zu laden, verwenden SPAs JavaScript, um Navigation und UI-Updates zu handhaben. Benutzerinteraktionen lösen asynchrone Anfragen (AJAX/Fetch) an den Server aus.'
    },
    {
      title: 'AJAX-Anfragen und APIs',
      text: 'Die SPA kommuniziert über AJAX mit dem Server, um Daten abzurufen oder zu senden. Der Server antwortet mit Daten (meistens JSON), die die SPA verwendet, um die Ansicht zu aktualisieren.'
    },
    {
      title: 'Aktualisieren des DOM',
      text: 'Die SPA aktualisiert das Document Object Model (DOM) dynamisch basierend auf den erhaltenen Daten. Frameworks wie Angular, React und Vue.js verwalten diese Updates effizient.'
    },
    {
      title: 'Routing',
      text: 'Client-seitige Routing-Bibliotheken (React Router, Vue Router, Angular Router) verwalten URL-Änderungen ohne vollständige Seitenneuladung. Der Router bestimmt, welche Komponente basierend auf der URL gerendert wird.'
    }
  ]
}
