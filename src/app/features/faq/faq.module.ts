import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [FaqComponent],
    imports: [CommonModule, FaqRoutingModule]
})
export class FaqModule {}
