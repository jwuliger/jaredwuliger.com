import { Component } from '@angular/core';
import { PageTitleService } from './core/services/page-title.service';

@Component({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <main class="app-container">
            <router-outlet></router-outlet>
        </main>
    `
})
export class AppComponent {
    constructor(private pageTitleService: PageTitleService) {}
}
