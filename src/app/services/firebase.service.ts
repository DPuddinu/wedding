import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { from } from 'rxjs';

const COLLECTION = "invites"


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firestore: AngularFirestore) { }

  saveInvite(invite: Invite) : Observable<any>{
    return from(this.firestore.collection(COLLECTION).add(invite))
  }
  getInvites() : Observable<Invite[]>{
    return this.firestore.collection(COLLECTION).valueChanges() as Observable<Invite[]>
  }

}

export interface Invite {
  name: string,
  surname: string,
  email: string,
  confirm: boolean,
  participants?: Participant[],
  questions?: string,
  allergies?: string[]
}
interface Participant {
  name: string,
  surname: string,
  isChild: boolean
}
