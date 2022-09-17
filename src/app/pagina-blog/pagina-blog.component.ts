import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-blog',
  templateUrl: './pagina-blog.component.html',
  styleUrls: ['./pagina-blog.component.css']
})
export class PaginaBlogComponent implements OnInit {

  constructor() { }

  images = 
  [
    {
       src : 'https://i.postimg.cc/vZ8MQtXJ/jane.jpg',
       altText: 'Autora del Blog',
       name: 'Juana Gordon',
       textAbout: '  Viajar es una de las mayores experiencias que se pueden realizar. Es aprender, conocer otras culturas, escapar de la rutina y romper barreras, miedos y prejuicios. Viajar es abrir horizontes, descubrir cosas nuevas y, por supuesto, conocerse a sí mismo.',
       show: true
    },
    {
      src : 'https://i.postimg.cc/NFwqZ65P/juan.jpg',
      altText: 'Autor del Blog',
      name: 'Juan Pedro Rjltakirs',
      textAbout: 'Viajar te trasforma la manera de ver la vida, es de las actividades que más disfruto.',
      show: true
   },
    {
      src : 'https://i.postimg.cc/GtJwR4D3/maria.jpg',
      altText: 'Autora del Blog',
      name: 'Mónica E Petroleoati',
      textAbout: 'Me gusta conocer nuevos lugares cada año, me renueva las energías y perdí el miedo a volar!',
      show: true
   },
  {
      src : 'https://i.postimg.cc/NG1wmznh/pepe.jpg',
      altText: 'Autor del Blog',
      name: 'José Frapeli',
      textAbout: 'Lo que más disfruto de mis viajes son los hoteles de lujo y los tragos que sirven en las piscinas, insuperables!',
      show: true
   },
   {
     src : 'https://i.postimg.cc/vTRbbRSh/carla.jpg',
     altText: 'Autora del Blog',
     name: 'Carla Trota Sefardeli',
     textAbout: 'Cada viaje es una experiencia de vida nueva, el viajar es la mejor inversión que uno puede hacer, son momentos de disfrute y situaciones para toda la vida.',
     show: true
  }

  ]

  ngOnInit(): void {
  }

}
