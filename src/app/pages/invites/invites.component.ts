import {Component, OnInit} from '@angular/core';
import { emptyInvite, FirebaseService, Invite} from "../../services/firebase.service";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  invite: Invite = {...emptyInvite};

  constructor(private firebase: FirebaseService, private dialog: MatDialog) { }

  ngOnInit(): void {
    //load invite from localStorage if any
  }

  onError() {
    // mostrare messaggio di errore
  }

  addParticipant() {
    this.invite?.participants?.push({
      id: uuidv4(),
      name:'',
      surname:'',
      isChild:false
    })
  }

  onSuccess() {
    this.openDialog()
  }

  sendInvite() {
    const newInvite = {...this.invite}
    const participants = newInvite.participants
    if(participants && participants[participants.length-1].name===''){
      participants.pop()
    }
    this.firebase.saveInvite(this.invite).subscribe({
      next: () => {
        this.onSuccess();
      },
      error: this.onError
    })
  }

  openDialog(): void {
    this.dialog.open(ConfirmDialogComponent, {data: {}});
  }

  onChildConfirm(index: number, isChild: boolean) {
    const participant = this.invite.participants
    if(participant && participant[index]){
      participant[index].isChild= isChild
    }
  }

  onConfirm(confirm: boolean) {
    this.invite.confirm = confirm
  }

}
