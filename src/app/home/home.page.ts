import { AutenticationService } from './../services/autentication.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //variables del formulario
  name: string = '';
  nameFinal:string='';
  password:string='';
  //para el botton
  disableInput:boolean=false;
  //para el enlace
  textForgot:string="fogot your password?";
  colorName:string="default";
  colorPassword:string="default";

  constructor(private alertController:AlertController,private router:Router,private authService:AutenticationService) {}

  //validaciones
  /*let valido=0;
    if(this.name==''){
      this.colorName="danger";
    }
    else{
      valido++;
    }
    
    if(this.password==''){
      this.colorPassword="danger";
    }
    else{
      valido++;
    }
    console.log(valido);
    if(valido==2){
      this.router.navigateByUrl('/registro');
    }*/
  onClick_1(){

    //validaciones
    let valido=0;
    if(this.name==''){
      this.colorName="danger";
    }
    else{
      valido++;
    }
    
    if(this.password==''){
      this.colorPassword="danger";
    }
    else{
      valido++;
    }
    console.log(valido);
    if(valido==2){
      //this.router.navigateByUrl('/home');
      this.authService.signup(this.name,this.password).then(()=>{
        this.authService.presentToast("Inicio de sesion");
        this.name="";
        this.password="";
        this.router.navigateByUrl('/lista-pelis');
      }).catch(error=>{
        console.log(error);
        this.authService.presentToast("Error al crear el usuario");
      });
    }

  }

  onClick_2(){

    this.router.navigateByUrl('/registro');

  }

  putPassword(){

    this.colorPassword="default";

  }

  putName(){

    this.colorName="default";

  }

  async enlaceClick(){

    /*Email<input type="email" id="email"
       pattern=".+@globex.com" size="30" required> */
    
      const alert = await this.alertController.create({
        header: 'Email',
        message: "<ion-item><ion-input type='email' id='email'>"+this.name+"</ion-input></ion-item>",
        buttons: ['Cancel', 
              {
                text: 'Okay',
                handler: () => {
                      
                  console.log(this.name);
                }
              }] 
      });
  
      await alert.present();

  }

}
