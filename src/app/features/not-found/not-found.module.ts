import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [CommonModule, NotFoundRoutingModule, MatButtonModule]
})
export class NotFoundModule {}
