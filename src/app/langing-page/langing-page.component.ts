import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LangingPageComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {
      {
        this.peliculasEnCines = [
          {
            titulo :'Spiderman',
            fechaLanzamiento: new Date(),
            precio: 1400.99,
            poster: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg'
          },
          {
            titulo :'Moana',
            fechaLanzamiento: new Date('2016-11-14'),
            precio: 1400.99,
            poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Moana.svg/800px-Moana.svg.png'
          },
          {
            titulo :'Los Vengadores',
            fechaLanzamiento: new Date('2016-11-14'),
            precio: 1400.99,
            poster:'https://www.altonivel.com.mx/wp-content/uploads/2019/05/avengers.jpg'
          },
          {
            titulo :'Venom',
            fechaLanzamiento: new Date(),
            precio: 1400.99,
            poster:'https://i.etsystatic.com/25769395/r/il/41899d/2757709903/il_fullxfull.2757709903_qkgk.jpg'
          },
          {
            titulo :'Mario Bros',
            fechaLanzamiento: new Date('2016-11-14'),
            precio: 1400.99,
            poster:'https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1600'
          },
          {
            titulo :'Wall-e',
            fechaLanzamiento: new Date('2016-11-14'),
            precio: 1400.99,
            poster:'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/wall-e/galeria/3139610-3-esl-ES/Wall-E.jpg'
          }
        ]
      }
    }, 500);

  }

  peliculasEnCines;

  peliculasProximosEstrenos = []

  manajarRated(voto:number):void {
    alert(voto)
  }


}
