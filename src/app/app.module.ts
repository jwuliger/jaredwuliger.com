import {
    BrowserModule,
    provideClientHydration
} from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageTitleService } from './core/services/page-title.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        // Material Modules Used Globally
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,

        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [PageTitleService, provideClientHydration()],
    bootstrap: [AppComponent]
})
export class AppModule {}
