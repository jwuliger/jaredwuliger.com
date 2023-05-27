import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'about',
        loadChildren: () =>
            import('./features/about/about.module').then((m) => m.AboutModule)
    },
    {
        path: 'services',
        loadChildren: () =>
            import('./features/services/services.module').then(
                (m) => m.ServicesModule
            )
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./features/projects/projects.module').then(
                (m) => m.ProjectsModule
            )
    },
    {
        path: 'faq',
        loadChildren: () =>
            import('./features/faq/faq.module').then((m) => m.FaqModule)
    },
    {
        path: 'blog',
        loadChildren: () =>
            import('./features/blog/blog.module').then((m) => m.BlogModule)
    },
    {
        path: 'contact',
        loadChildren: () =>
            import('./features/contact/contact.module').then(
                (m) => m.ContactModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
