import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'projects',
                loadChildren: () =>
                    import('./projects/projects.module').then(
                        (m) => m.ProjectsModule
                    )
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
