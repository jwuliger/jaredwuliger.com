/* eslint-disable @typescript-eslint/no-empty-function */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, forkJoin, from } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Component } from '@angular/core';
import { Project } from './../../features/projects/projects-model';
import { ProjectService } from './../../features/projects/projects.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projectForm: FormGroup;
    imageFile: File | null = null;
    thumbnailFile: File | null = null;
    imageUploadProgress: Observable<number> | null = null;
    thumbnailUploadProgress: Observable<number> | null = null;

    constructor(
        private formBuilder: FormBuilder,
        private projectService: ProjectService,
        private storage: AngularFireStorage,
        private router: Router
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
        if (this.projectForm.valid && this.imageFile && this.thumbnailFile) {
            const projectData: Project = {
                ...this.projectForm.value,
                image: '', // Temporary
                thumbnail: '' // Temporary
            };

            const uploadImage = this.uploadFile(
                this.imageFile,
                `images/${this.imageFile.name}`
            );
            const uploadThumbnail = this.uploadFile(
                this.thumbnailFile,
                `thumbnails/${this.thumbnailFile.name}`
            );

            this.imageUploadProgress = uploadImage.progress;
            this.thumbnailUploadProgress = uploadThumbnail.progress;

            forkJoin({
                image: uploadImage.downloadUrl,
                thumbnail: uploadThumbnail.downloadUrl
            }).subscribe((results) => {
                projectData.image = results.image;
                projectData.thumbnail = results.thumbnail;
                this.projectService.createProject(projectData).then(() => {
                    this.router.navigate(['/projects']);
                });
                this.imageFile = null;
                this.thumbnailFile = null;
            });
        }
    }

    uploadFile(
        file: File,
        path: string
    ): { progress: Observable<number>; downloadUrl: Observable<string> } {
        const ref = this.storage.ref(path);

        // Define the metadata to keep the file from loading on every page load
        const metadata = {
            cacheControl: 'public, max-age=31536000' // 1 year
        };

        // Include the metadata in the upload task
        const task = ref.put(file, metadata);

        // get notified when the download URL is available
        return {
            progress: task
                .percentageChanges()
                .pipe(
                    filter((value) => value !== undefined)
                ) as Observable<number>,
            downloadUrl: task.snapshotChanges().pipe(
                filter((snapshot) => snapshot?.state === 'success'),
                switchMap(() => from(ref.getDownloadURL()))
            )
        };
    }
}
