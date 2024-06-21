import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgStyle, NgFor, NgIf],
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  @Input() page!: { prevPage: number; currPage: number };
  @Input() pageIndex!: number;

  text = [
    {
      title: 'Geschwindigkeit und Reaktionsfähigkeit',
      text: 'SPAs bieten eine flüssigere und reaktionsschnellere Benutzererfahrung, da sie die Datenmenge, die zwischen Client und Server übertragen wird, reduzieren, indem nur die notwendigen Daten gesendet werden.',
    },
    {
      title: 'Reduzierte Serverlast',
      text: 'Da die meisten Benutzeroberflächen-Logiken im Browser verarbeitet werden, können SPAs die Serverlast erheblich reduzieren.',
    },
    {
      title: 'Verbesserte Benutzererfahrung',
      text: 'Mit SPAs erleben die Benutzer nahtlose Übergänge und weniger Unterbrechungen, ähnlich wie bei Desktop-Anwendungen.',
    },
  ];
}
