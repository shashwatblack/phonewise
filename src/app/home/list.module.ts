import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from '@app/home/list.component';
import { DataService } from '@app/home/data.service';
import { NgDragDropModule } from 'ng-drag-drop';
import { BasketComponent } from '@app/home/basket.component';
import { DataStoreService } from '@app/home/dataStore.service';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, NgDragDropModule.forRoot()],
  declarations: [ListComponent, BasketComponent],
  providers: [DataService, DataStoreService]
})
export class ListModule {}
