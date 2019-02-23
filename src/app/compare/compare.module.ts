import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CompareRoutingModule],
  declarations: [CompareComponent]
})
export class CompareModule {}
