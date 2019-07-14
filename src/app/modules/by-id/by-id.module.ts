import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByIdRoutingModule } from './by-id-routing.module';
import { ByIdComponent } from './by-id.component';

@NgModule({
  declarations: [ByIdComponent],
  imports: [
    CommonModule,
    ByIdRoutingModule
  ]
})
export class ByIdModule { }
