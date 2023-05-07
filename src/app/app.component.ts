import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'front-end';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      {
        this.peliculasEnCines = [
          {
            titulo :'Spiderman',
            fechaLanzamiento: new Date(),
            precio: 1400.99
          },
          {
            titulo :'Moana',
            fechaLanzamiento: new Date('2016-11-14'),
            precio: 1400.99
          },
          {
            titulo :'Los Vengadores',
            fechaLanzamiento: new Date('2016-11-14'),
            precio: 1400.99
          },
        ]
      }
    }, 500);

  }

  peliculasEnCines;

  peliculasProximosEstrenos = [
    {
      titulo :'Avengers',
      fechaLanzamiento: new Date(),
      precio: 1400.99
    },
    {
      titulo :'Avatar',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 1400.99
    },
    {
      titulo :'Star Wars',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 1400.99
    }
  ]

}
