import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer.component";
import {MaterialExampleModule} from "../../material.module";
import {AppRoutingModule} from "../../app-routing-module";


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
