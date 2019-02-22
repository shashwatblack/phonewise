import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  { path: 'compare', component: CompareComponent },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
