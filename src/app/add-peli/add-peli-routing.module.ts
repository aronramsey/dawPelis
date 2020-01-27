import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPeliPage } from './add-peli.page';

const routes: Routes = [
  {
    path: '',
    component: AddPeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPeliPageRoutingModule {}
