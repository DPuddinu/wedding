import { Component, OnInit } from '@angular/core';
import {FirebaseService, Invite} from "../../services/firebase.service";

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  invites: Invite[] = [];

  constructor(private firebase: FirebaseService) {

  }

  ngOnInit(): void {

    this.firebase.getInvites().subscribe(invites => {
      this.invites = invites
    })

    // this.firebase.getInvites().subscribe((invites) => this.invites = invites)
  }

}
