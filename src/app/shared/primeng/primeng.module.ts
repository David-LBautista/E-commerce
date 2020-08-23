import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';

const  primengComponents= [
  ButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primengComponents
  ],
  exports:[
    primengComponents

  ]
})
export class PrimengModule { }
