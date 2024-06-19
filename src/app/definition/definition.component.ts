import { NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    imports: [NgStyle],
    selector: 'app-definition',
    templateUrl: './definition.component.html',
    styleUrl: './definition.component.scss',
})
export class DefinitionComponent {
    @Input() page!: {prevPage: number, currPage: number};
    @Input() pageIndex!: number;

    spaText = "A Single Page Application is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.";
    tpatext = "In traditional web applications, navigating between different pages requires loading entire new pages. SPAs, however, load a single HTML page and dynamically update content as the user interacts with the app.";

}
  