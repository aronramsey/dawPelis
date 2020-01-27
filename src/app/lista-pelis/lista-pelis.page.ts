import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pelis',
  templateUrl: './lista-pelis.page.html',
  styleUrls: ['./lista-pelis.page.scss'],
})
export class ListaPelisPage implements OnInit {

  constructor(private router:Router) { }

  addPeli(){
    this.router.navigateByUrl('/add-peli');
  }

  ngOnInit() {
  }

  

}
