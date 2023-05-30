import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const name = 'Jared Wuliger | Senior Software Engineer';

const routes: Routes = [
    {
        path: 'home',
        data: { pageTitle: name },
        loadChildren: () =>
            import('./features/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'about',
        data: { pageTitle: `About - ${name}` },
        loadChildren: () =>
            import('./features/about/about.module').then((m) => m.AboutModule)
    },
    {
        path: 'services',
        data: { pageTitle: `Services - ${name}` },
        loadChildren: () =>
            import('./features/services/services.module').then(
                (m) => m.ServicesModule
            )
    },
    {
        path: 'projects',
        data: { pageTitle: `Projects - ${name}` },
        loadChildren: () =>
            import('./features/projects/projects.module').then(
                (m) => m.ProjectsModule
            )
    },
    {
        path: 'faq',
        data: { pageTitle: `FAQ - ${name}` },
        loadChildren: () =>
            import('./features/faq/faq.module').then((m) => m.FaqModule)
    },
    {
        path: 'blog',
        data: { pageTitle: `Blog - ${name}` },
        loadChildren: () =>
            import('./features/blog/blog.module').then((m) => m.BlogModule)
    },
    {
        path: 'contact',
        data: { pageTitle: `Contact - ${name}` },
        loadChildren: () =>
            import('./features/contact/contact.module').then(
                (m) => m.ContactModule
            )
    },
    {
        path: 'not-found',
        data: { pageTitle: `Contact - ${name}` },
        loadChildren: () =>
            import('./features/not-found/not-found.module').then(
                (m) => m.NotFoundModule
            )
    },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
