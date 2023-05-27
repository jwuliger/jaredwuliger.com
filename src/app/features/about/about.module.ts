import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, AboutRoutingModule]
})
export class AboutModule {}
