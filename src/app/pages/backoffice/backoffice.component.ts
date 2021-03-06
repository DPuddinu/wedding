import { Component, OnInit } from '@angular/core';
import {FirebaseService, Invite, Participant} from "../../services/firebase.service";
import {MatDialog} from "@angular/material/dialog";
import {CustomDialogComponent} from "../../components/custom-dialog/custom-dialog.component";



@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  invites: Invite[] = [];
  totalChildren: number = 0;
  totalConfirms: number = 0;
  selectedColor = "#e0e0e0";

  constructor(private firebase: FirebaseService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.firebase.getInvites().subscribe((invites:Invite[]) => {
      this.totalChildren = 0;
      this.totalConfirms = 0;
      this.invites = invites
      this.invites.forEach(invite => {
        if(invite.confirm){
          this.totalConfirms +=1
          this.totalConfirms += invite.participants.length
          this.totalChildren += this.countChildren(invite.participants)
        }
      })
    })
  }

  deleteInvite = (invite:Invite) => {
    this.firebase.removeInviteById(invite.id).subscribe(t=> {
      // OTHER THINGS TO DO
    })
  }

  setCounted(invite:Invite) {
    this.firebase.countInvite(invite).subscribe(t => {
      console.log(t)
    })
  }

  openDialog(invite: Invite): void {
    this.dialog.open(CustomDialogComponent, {
      data: {
        payload: invite,
        confirm: this.deleteInvite
      } ,
    });
  }


  yesOrNo(invite:Invite){
    return invite.confirm? "Si" :"No"
  }

  countChildren(participants: Participant[] = []) {
    return participants.filter(participant => participant.isChild).length
  }
}
