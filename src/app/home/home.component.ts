import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular-site';
  btnTravelText = "Ver más Paquetes de Viajes";
  btnTravelTextHide = "Ocultar Paquetes de Viajes";
  show:boolean = false;
  hide:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
