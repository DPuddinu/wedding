import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firebaseService: AngularFireDatabase) { }

  saveInvite(invite: Invite) : Observable<any>{
    return of("test")
  }
  getInvites() : Observable<Invite[]>{
    return of([])
  }


}

export interface Invite {
  name: string,
  surname: string,
  email: string,
  confirm: boolean,
  participants: string[],
  questions: string,
  allergies: string[]
}
