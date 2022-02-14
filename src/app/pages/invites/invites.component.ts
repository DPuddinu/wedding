import { Component, OnInit } from '@angular/core';
import {FirebaseService, Invite} from "../../services/firebase.service";

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  invite: any;

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  onError() {

  }
  onSuccess() {

  }


  addInvite() {

    const invite: Invite = {
      name: "ivo",
      surname: "avido",
      confirm: true,
      email: "ivoavido@gmail.com",
      allergies: ["cani"],
      participants: [
          {
            name: "marco",
            surname:"polo",
            isChild: false
          }
        ],
      questions: "sono puggile?"
    }

    this.firebase.saveInvite(invite).subscribe({
      next: this.onSuccess,
      error: this.onError
    })
  }
}
