import { Component } from '@angular/core';
import { PageTitleService } from './core/services/page-title.service';

@Component({
    selector: 'app-root',
    template: `
        <div class="app-container">
            <app-header></app-header>
            <main class="content">
                <router-outlet></router-outlet>
            </main>
            <app-footer></app-footer>
        </div>
    `
})
export class AppComponent {
    constructor(private pageTitleService: PageTitleService) {}
}
