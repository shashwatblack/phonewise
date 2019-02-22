import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { CompareComponent } from './compare.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'compare', component: CompareComponent, data: { title: extract('Compare') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CompareRoutingModule {}
