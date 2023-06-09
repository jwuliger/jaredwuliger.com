import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Project } from './../../features/projects/projects-model';
import { ProjectService } from './../../features/projects/projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projectForm: FormGroup;
    imageFile: File | null = null;
    thumbnailFile: File | null = null;

    constructor(
        private formBuilder: FormBuilder,
        private projectService: ProjectService
    ) {
        this.projectForm = this.formBuilder.group({
            caption: ['', Validators.required],
            description: ['', Validators.required],
            image: ['', Validators.required],
            thumbnail: ['', Validators.required],
            title: ['', Validators.required]
        });
    }

    onImageSelected(event: Event): void {
        const file = (event.target as HTMLInputElement).files;
        if (file) {
            this.imageFile = file[0];
        }
    }

    onThumbnailSelected(event: Event): void {
        const file = (event.target as HTMLInputElement).files;
        if (file) {
            this.thumbnailFile = file[0];
        }
    }

    createProject(): void {
        if (this.projectForm.valid) {
            const projectData: Project = {
                ...this.projectForm.value,
                image: this.imageFile, // TODO: Replace with URL after upload
                thumbnail: this.thumbnailFile // TODO: Replace with URL after upload
            };
            this.projectService.createProject(projectData);
            this.projectForm.reset();
            this.imageFile = null;
            this.thumbnailFile = null;
        }
    }
}
