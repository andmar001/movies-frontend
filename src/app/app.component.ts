import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-end';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [
        {
          titulo: 'Spiderman',
          fechaLanzamiento: '2020-10-10',
          precio: 1000,
        },
        {
          titulo: 'Avengers',
          fechaLanzamiento: '2020-10-10',
          precio: 1000,
        },
        {
          titulo: 'Batman',
          fechaLanzamiento: '2020-10-10',
          precio: 1000,
        },
        {
          titulo: 'Superman',
          fechaLanzamiento: '2020-10-10',
          precio: 3000,
        },
      ]
    }, 1000);
  }

  peliculas;

  duplicarNumeros(valor:number):number{
    return valor * 2;
  }
}
