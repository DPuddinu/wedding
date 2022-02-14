import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { StoryComponent } from './pages/story/story.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { InvitesComponent } from './pages/invites/invites.component';
import {HeaderModule} from "./components/header/header.module";
import {MaterialExampleModule} from "./material.module";
import {BackofficeModule} from "./pages/backoffice/backofficeModule";
import {AppRoutingModule} from "./app-routing-module";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    GiftsComponent,
    InvitesComponent
  ],
  imports: [
    AppRoutingModule,
    HeaderModule,
    BackofficeModule,
    MaterialExampleModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
