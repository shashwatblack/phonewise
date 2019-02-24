import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from '@app/home/safe.pipe';

@NgModule({
  imports: [CommonModule, TranslateModule, DetailRoutingModule, NgbModule],
  declarations: [DetailComponent, SafePipe]
})
export class DetailModule {}
