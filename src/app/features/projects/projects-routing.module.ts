import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    },
    {
        path: 'detail',
        loadChildren: () =>
            import('./detail/detail.module').then((m) => m.DetailModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {}
