import { CreatedocService } from './createdoc.service';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../modelos/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  newUsuario:Usuario={
    id:"",
    mail:"",
    password:""
  };

  constructor(private alauth:AngularFireAuth,private toastController:ToastController,private crear:CreatedocService) { }

  async createUser(mail:string,password:string){

    return this.alauth.auth.createUserWithEmailAndPassword(mail,password).then((neWCredencial:firebase.auth.UserCredential)=>{
      console.log(neWCredencial);
      this.newUsuario.mail=mail;
      this.newUsuario.password=password;
      this.crear.createUser(this.newUsuario);
      //this.db.doc('users/').set({neWCredencial});
    }).catch(error=>{
      console.log(error);
      throw new Error(error);
    });

  }

  async signup(mail:string,password:string){

    return this.alauth.auth.signInWithEmailAndPassword(mail,password).then((neWCredencial:firebase.auth.UserCredential)=>{
      console.log(neWCredencial);
    }).catch(error=>{
      console.log(error);
      throw new Error(error);
    });
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
