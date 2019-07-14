import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByWordComponent } from './by-word.component';

const routes: Routes = [
  { path: '', component: ByWordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByWordRoutingModule { }
