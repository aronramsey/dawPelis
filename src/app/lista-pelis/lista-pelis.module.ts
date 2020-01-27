import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPelisPageRoutingModule } from './lista-pelis-routing.module';

import { ListaPelisPage } from './lista-pelis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPelisPageRoutingModule
  ],
  declarations: [ListaPelisPage]
})
export class ListaPelisPageModule {}
