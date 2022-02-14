import { Component, OnInit } from '@angular/core';
import {FirebaseService, Invite} from "../../services/firebase.service";

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  addInvite() {

    const invite: Invite = {
      name: "gino",
      surname: "panino",
      confirm: true,
      email: "ginopanino@gmail.com",
      allergies: ["cani"],
      participants: ["pinco pallino"],
      questions: "c'è Lillo?"
    }

    this.firebase.saveInvite(invite).subscribe(() => {

    })
  }
}
