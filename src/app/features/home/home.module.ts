import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, MatButtonModule]
})
export class HomeModule {}
