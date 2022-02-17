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
    const part = this.invite.participants
    const lastPart = this.invite.participants[part.length-1]
    if(part && lastPart.name !== '' && lastPart.surname !== ''){
      this.invite?.participants?.push({
        id: uuidv4(),
        name:'',
        surname:'',
        isChild:false
      })
    }
  }

  onSuccess() {
    this.openDialog()
  }

  sendInvite() {
    const newInvite = {...this.invite}
    const participants = newInvite.participants

    const validParticipants = participants.filter(part => part.name !== '' && part.surname !== '')
    newInvite.participants = validParticipants? validParticipants : []

    this.firebase.saveInvite(newInvite).subscribe({
      next: ()=>this.onSuccess(),
      error: ()=>this.onError()
    })
  }

  openDialog(): void {
    this.dialog.open(ConfirmDialogComponent, {data: {confirm:this.invite.confirm}});
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
