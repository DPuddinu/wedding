import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {GiftsComponent} from "./pages/gifts/gifts.component";
import {StoryComponent} from "./pages/story/story.component";
import {InvitesComponent} from "./pages/invites/invites.component";
import {BackofficeComponent} from "./pages/backoffice/backoffice.component"; // CLI imports router

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'story', component: StoryComponent },
  { path: 'invites', component: InvitesComponent},
  { path: 'backoffice', component: BackofficeComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
