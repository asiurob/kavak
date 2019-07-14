import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByIdComponent } from './by-id.component';

const routes: Routes = [
  { path: '', component: ByIdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByIdRoutingModule { }
