import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    id: string | undefined;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.id = id !== null ? id : '';
    }
}
