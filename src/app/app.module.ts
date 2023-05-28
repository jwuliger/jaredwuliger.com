import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PageTitleService } from './core/services/page-title.service';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        // Material Modules Used Globally
        MatToolbarModule
    ],
    providers: [PageTitleService],
    bootstrap: [AppComponent]
})
export class AppModule {}
