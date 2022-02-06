import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = 
  [
    {
       src : '../assets/images/cards/001.jpg',
       altText: 'imagen de paisajes',
       title: 'Playa del Carmen',
       text: 'Playa del Carmen es una ciudad mexicana, cabecera del municipio de Solidaridad, Quintana Roo.',
       btnText: 'Reservar'
    },
    {
      src : '../assets/images/cards/002.jpg',
      altText: 'imagen de playas',
      title: 'Bahamas',
      text: 'Uno de los trece países que forman la América Insular o Islas del Caribe.',
      btnText: 'Reservar'
    },
    {
      src : '../assets/images/cards/003.jpg',
      altText: 'viajes',
      title: 'Venecia',
      text: 'Patrimonio de la Humanidad por la Unesco, situado en un conjunto de islas en la laguna de Venecia',
      btnText: 'Reservar'
    },
    {
     src : '../assets/images/cards/004.jpg',
     altText: 'traveling',
     title: 'Perú',
     text: 'Perú (en quechua y en aimara: Piruw), país ubicado al oeste de América del Sur.',
     btnText: 'Reservar'
    }
  ]
}
