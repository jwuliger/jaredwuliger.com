import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectService } from './projects.service';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    declarations: [ProjectsComponent],
    imports: [CommonModule, ProjectsRoutingModule],
    providers: [ProjectService]
})
export class ProjectsModule {}
