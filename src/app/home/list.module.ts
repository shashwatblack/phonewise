import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from '@app/home/list.component';
import { dataService } from '@app/home/data.service';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, NgDragDropModule.forRoot()],
  declarations: [ListComponent],
  providers: [dataService]
})
export class ListModule {}