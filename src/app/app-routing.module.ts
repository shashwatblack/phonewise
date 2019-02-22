import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompareComponent } from '@app/compare/compare.component';
import { DetailComponent } from '@app/detail/detail.component';

const routes: Routes = [
  { path: 'compare', component: CompareComponent },
  { path: 'detail', component: DetailComponent },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
