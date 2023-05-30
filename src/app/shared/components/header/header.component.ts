import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    navVisible = false;

    isSmallScreen$ = this.breakpointObserver
        .observe([Breakpoints.Small, Breakpoints.XSmall])
        .pipe(map((result) => result.matches));

    constructor(private breakpointObserver: BreakpointObserver) {}

    ngOnInit() {
        this.breakpointObserver
            .observe([Breakpoints.HandsetPortrait])
            .subscribe((result) => {
                this.navVisible = !result.matches;
                this.onResize();
            });
    }

    onResize() {
        this.navVisible = !this.breakpointObserver.isMatched(
            Breakpoints.HandsetPortrait
        );
    }
}
