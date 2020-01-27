import { AutenticationService } from './../services/autentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

   //variables del formulario
   name: string = '';
   nameFinal:string='';
   password:string='';
   //para el botton
   disableInput:boolean=false;
   //para el enlace
   colorName:string="default";
   colorPassword:string="default";
   visualizarTexto:boolean=false;

  constructor(private router:Router,private authService:AutenticationService) { }

  ngOnInit() {
  }

  onClick(){

    //this.router.navigateByUrl('/registro');
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
      this.authService.createUser(this.name,this.password).then(()=>{
        this.authService.presentToast("Usuario creado correctamente");
        this.router.navigateByUrl('/home');
        this.name="";
        this.password="";
      }).catch(error=>{
        console.log(error);
        this.authService.presentToast("Error al crear el usuario");
      });

    }

  }

  putPassword(){

    this.colorPassword="default";

  }

  putName(){

    this.colorName="default";

  }

  trueVar(){
    this.visualizarTexto=true;
  }

  falseVar(){
    this.visualizarTexto=false;
  }

}
