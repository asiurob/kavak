import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/all/all.module#AllModule' },
  { path: ':id', loadChildren: './modules/by-id/by-id.module#ByIdModule' },
  { path: 'busqueda/:word', loadChildren: './modules/by-word/by-word.module#ByWordModule', runGuardsAndResolvers: 'always', },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
