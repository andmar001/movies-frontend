import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor( private _peliculaService:PeliculasService) { }

  @Input() peliculas:PeliculaDTO[];

  @Output() borrado:EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}

  borrar(peliculaId: number){
    this._peliculaService.borrar(peliculaId)
      .subscribe(() => {
        this.borrado.emit();
      })
  }

}
