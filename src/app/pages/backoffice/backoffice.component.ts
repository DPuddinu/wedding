import { Component, OnInit } from '@angular/core';
import {FirebaseService, Invite, Participant} from "../../services/firebase.service";

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  invites: Invite[] = [];
  totalChildren: number = 0;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.firebase.getInvites().subscribe((invites:Invite[]) => {
      this.invites = invites

      this.invites.forEach(invite => {
        this.totalChildren += this.countChildren(invite.participants)
      })
      console.log(this.totalChildren)
    })
  }
  countChildren(participants: Participant[] = []) {
    return participants.filter(participant => participant.isChild).length
  }
}
