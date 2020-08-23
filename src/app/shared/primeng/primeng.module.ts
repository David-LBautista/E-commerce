import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Buttons
import {ButtonModule} from 'primeng/button';


//Form components
import {DropdownModule} from 'primeng/dropdown';

const  primengComponents= [
  ButtonModule,
  DropdownModule
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
