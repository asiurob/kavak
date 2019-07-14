import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByWordRoutingModule } from './by-word-routing.module';
import { ByWordComponent } from './by-word.component';

@NgModule({
  declarations: [ByWordComponent],
  imports: [
    CommonModule,
    ByWordRoutingModule
  ]
})
export class ByWordModule { }
