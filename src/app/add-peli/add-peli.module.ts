import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPeliPageRoutingModule } from './add-peli-routing.module';

import { AddPeliPage } from './add-peli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPeliPageRoutingModule
  ],
  declarations: [AddPeliPage]
})
export class AddPeliPageModule {}
