import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {MaterialExampleModule} from "../../material.module";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
