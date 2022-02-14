import { Component, OnInit } from '@angular/core';
import { emptyInvite, FirebaseService, Invite} from "../../services/firebase.service";
import { FormControl , Validators} from "@angular/forms";

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  invite: Invite = {...emptyInvite};


  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
    //load invite from localStorage if any
  }

  onError() {

  }

  addParticipant() {
    this.invite?.participants?.push({
      name:'',
      surname:'',
      isChild:false
    })
  }

  onSuccess() {
    this.invite = {...emptyInvite};
    // show confirm to user
  }

  sendInvite() {
    this.firebase.saveInvite(this.invite).subscribe({
      next: this.onSuccess,
      error: this.onError
    })
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
