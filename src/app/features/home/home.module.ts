import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatButtonModule,
        NgxTypedJsModule
    ]
})
export class HomeModule {}
