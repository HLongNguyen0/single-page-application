import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { NgIf, NgStyle } from '@angular/common';
import { DefinitionComponent } from './definition/definition.component';
import { FeaturesComponent } from './features/features.component';
import { FrameworksComponent } from './frameworks/frameworks.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgIf,
    NgStyle,
    IntroductionComponent,
    DefinitionComponent,
    FeaturesComponent,
    FrameworksComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [],
})
export class AppComponent {
  testPage = 4;
  page = { prevPage: this.testPage - 1, currPage: this.testPage };

  changePage(nextPage: boolean) {
    this.page.prevPage = this.page.currPage;
    if (nextPage) this.page.currPage++;
    else this.page.currPage--;
  }

  pagePosition(pageIndex: number) {
    if (this.page.currPage > pageIndex) return '-100vw';
    if (this.page.currPage < pageIndex) return '100vw';
    return 0;
  }
}
