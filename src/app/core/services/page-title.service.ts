import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class PageTitleService {
    constructor(
        private titleService: Title,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.initializePageTitle();
    }

    private initializePageTitle(): void {
        this.router.events
            .pipe(
                // Filter only NavigationEnd events
                filter((event) => event instanceof NavigationEnd),

                // Get the current activated route
                map(() => this.activatedRoute),

                // Traverse through the child routes to find the deepest active route
                map((route) => {
                    while (route.firstChild) route = route.firstChild;
                    return route;
                }),

                // Filter primary outlet routes
                filter((route) => route.outlet === 'primary'),

                // Get the route data
                mergeMap((route) => route.data)
            )
            .subscribe((data) => {
                // Set the page title if 'pageTitle' is present in the route data, else use the default title
                const pageTitle = data['pageTitle'] || 'Triangle Mental Health';
                this.titleService.setTitle(pageTitle);
            });
    }
}
