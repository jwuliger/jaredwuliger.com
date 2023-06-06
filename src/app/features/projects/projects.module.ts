import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    declarations: [ProjectsComponent],
    imports: [CommonModule, ProjectsRoutingModule, NgxMasonryModule]
})
export class ProjectsModule {}
