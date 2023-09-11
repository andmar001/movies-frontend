import { Component, OnInit, Input } from '@angular/core';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }

  @Input() peliculas:PeliculaDTO[];

  ngOnInit(): void {}

  remover(indicePelicula: number){
    this.peliculas.splice(indicePelicula, 1);
  }

}
