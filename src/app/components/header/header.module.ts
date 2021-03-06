import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {MaterialExampleModule} from "../../material.module";
import {AppRoutingModule} from "../../app-routing-module";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialExampleModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
