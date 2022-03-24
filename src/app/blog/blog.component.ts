import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = 
  [
    {
       src : '../assets/images/users/jane.jpg',
       altText: 'Autora del Blog',
       name: 'Juana Gordon',
       textAbout: '  Viajar es una de las mayores experiencias que se pueden realizar. Es aprender, conocer otras culturas, escapar de la rutina y romper barreras, miedos y prejuicios. Viajar es abrir horizontes, descubrir cosas nuevas y, por supuesto, conocerse a sí mismo.',
       show: true
    },
    {
      src : '../assets/images/users/juan.jpg',
      altText: 'Autor del Blog',
      name: 'Juan Pedro Rjltakirs',
      textAbout: 'Viajar te trasforma la manera de ver la vida, es de las actividades que más disfruto.',
      show: true
   },
    {
      src : '../assets/images/users/maria.jpg',
      altText: 'Autora del Blog',
      name: 'Mónica E Petroleoati',
      textAbout: 'Me gusta conocer lugares nuevos cada año, me renueva las energías y perdí el miedo a volar!',
      show: true
   },
  {
      src : '../assets/images/users/pepe.jpg',
      altText: 'Autor del Blog',
      name: 'José Frapeli',
      textAbout: 'Lo que más disfruto de mis viajes son los hoteles de lujo y los tragos que sirven en las piscinas, insuperables!',
      show: true
   },
   {
     src : '../assets/images/users/carla.jpg',
     altText: 'Autora del Blog',
     name: 'Carla Trota Sefardeli',
     textAbout: 'Cada viaje es una experiencia de vida nueva, el viajar es la mejor inversión que uno puede hacer, son momentos de disfrute y situaciones para toda la vida.',
     show: true
  }

  ]

}
