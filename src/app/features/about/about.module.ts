import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, AboutRoutingModule, MatButtonModule]
})
export class AboutModule {}
