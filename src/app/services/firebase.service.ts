import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { from } from 'rxjs';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

import { environment } from '../../environments/environment';

const COLLECTION = environment.dbEndpoint

export const emptyInvite: Invite = {
  name:'',
  surname:'',
  questions: '',
  participants: [{
    id: uuidv4(),
    name:'',
    surname:'',
    isChild:false
  }],
  confirm: false,
  allergies: '',
  email: ''
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firestore: AngularFirestore) { }

  saveInvite(invite: Invite) : Observable<any>{
    return from(this.firestore.collection(COLLECTION).add(invite))
  }
  getInvites() : Observable<Invite[]>{
    return this.firestore.collection(COLLECTION).valueChanges({idField: 'id'}) as Observable<Invite[]>
  }
  removeInviteById(inviteId = '') {
    return from(this.firestore.doc(COLLECTION + "/"+inviteId).delete());
  }
}

export interface Invite {
  id?: string,
  name: string,
  surname: string,
  email: string,
  confirm: boolean,
  participants: Participant[],
  questions?: string,
  allergies?: string
}
export interface Participant {
  id: string,
  name: string,
  surname: string,
  isChild: boolean
}
