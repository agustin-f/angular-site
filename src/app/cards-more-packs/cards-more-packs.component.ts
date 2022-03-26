import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-more-packs',
  templateUrl: './cards-more-packs.component.html',
  styleUrls: ['./cards-more-packs.component.css']
})
export class CardsMorePacksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = 
  [
    {
       src : 'https://i.postimg.cc/KYXKqVmP/006.jpg',
       altText: 'imagen de paisajes',
       title: 'Cancún',
       text: 'Cancún es una ciudad de México ubicada en la península de Yucatán que limita con el mar Caribe',
       btnText: 'Reservar',
       show: true
    },
    {
      src : 'https://i.postimg.cc/G2d4ry89/007.jpg',
      altText: 'imagen de playas',
      title: 'California',
      text: 'Se extiende desde la frontera con México por la costa del Pacífico por cerca de 900 milla',
      btnText: 'Reservar',
      show: true
    },
    {
      src : 'https://i.postimg.cc/QCMVKZq3/008.jpg',
      altText: 'viajes',
      title: 'Barcelona',
      text: 'Capital de la región de Cataluña en España, es conocida por su arte y arquitectura.',
      btnText: 'Reservar',
      show: true
    },
    {
     src : 'https://i.postimg.cc/bNWdrMD7/009.jpg',
     altText: 'traveling',
     title: 'El Cairo',
     text: 'Capital de Egipto.En su centro, se encuentra la plaza Tahrir y el vasto Museo Egipcio',
     btnText: 'Reservar',
     show: true
    },
    {
      src : 'https://i.postimg.cc/nz3hJwfw/010.jpg',
      altText: 'imagen de paisajes',
      title: 'Egipto',
      text: 'País que une el noreste de África con Medio Oriente, data del período de los faraones.',
      btnText: 'Reservar',
      show: true
    }
  ]
}
