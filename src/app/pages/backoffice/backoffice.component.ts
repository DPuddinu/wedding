import { Component, OnInit } from '@angular/core';
import {FirebaseService, Invite, Participant} from "../../services/firebase.service";

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  invites: Invite[] = [];
  children: number = 0;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {

    this.firebase.getInvites().subscribe(invites => {
      this.invites = invites

      this.children=0
      this.invites.forEach(invite => {
        this.children += this.countChildren(invite.participants = [])
      })
      console.log(this.children)
    })
  }
  countChildren(participants: Participant[]) {
    return participants.filter(participant => participant.isChild).length
  }
}
