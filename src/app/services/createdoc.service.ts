import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../modelos/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class CreatedocService {

  constructor(private db:AngularFirestore) { }

  createUser(newUser:Usuario){
    newUser.id=this.db.createId();
    this.db.doc("user/"+newUser.id).set(newUser);
  }
}
