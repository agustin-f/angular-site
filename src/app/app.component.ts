import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-site';
  btnTravelText = "Mostrar Todos los Paquetes de Viajes"
  show:boolean = false;
}
