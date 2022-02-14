import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialExampleModule} from "../../material.module";
import {AppRoutingModule} from "../../app-routing-module";
import {BackofficeComponent} from "./backoffice.component";


@NgModule({
  declarations: [BackofficeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialExampleModule
  ],
  exports: [
    BackofficeComponent
  ]
})
export class BackofficeModule { }
