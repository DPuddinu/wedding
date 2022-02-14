import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firestore: AngularFirestore) { }

  saveInvite(invite: Invite) : Observable<any>{
    return of("test")
  }
  getInvites() : Observable<Invite[]>{
    return this.firestore.collection('invites').valueChanges() as Observable<Invite[]>;
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
