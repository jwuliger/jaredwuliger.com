import { Component, OnInit } from '@angular/core';

import { Project } from './projects-model';
import { ProjectService } from './projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService) {}

    ngOnInit() {
        this.fetchProjects();
    }

    fetchProjects() {
        this.projectService.getProjects().subscribe((res) => {
            this.projects = res.map((item) => {
                return {
                    id: item.payload.doc.id,
                    ...(item.payload.doc.data() as Project)
                };
            });
        });
    }
}
