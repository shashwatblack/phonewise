import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { DetailComponent } from './detail.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'detail', component: DetailComponent, data: { title: extract('Detail') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DetailRoutingModule {}
