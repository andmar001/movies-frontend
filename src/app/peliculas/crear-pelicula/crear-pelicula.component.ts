import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelector';
import { PeliculaCreacionDTO } from '../pelicula';
import { parsearErrorAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.scss']
})
export class CrearPeliculaComponent implements OnInit {

  constructor( private _peliculasService:PeliculasService ) { }

  errores:string[] = [];

  generosNoSeleccionados:MultipleSelectorModel[] = [];
  cinesNoSeleccionados:MultipleSelectorModel[] = [];

  ngOnInit(): void {
    this._peliculasService.PostGet()
      .subscribe(resultado =>{

        this.generosNoSeleccionados = resultado.generos.map(genero =>{
          return <MultipleSelectorModel>{llave:genero.id, valor:genero.nombre}
        });
        this.cinesNoSeleccionados = resultado.cines.map(cine =>{
          return <MultipleSelectorModel>{llave:cine.id, valor:cine.nombre}
        });
      },
      error => console.error(error)
      )
  }

  guardarCambios(pelicula:PeliculaCreacionDTO){
    this._peliculasService.crear(pelicula)
      .subscribe(()=>{
        console.log("Exitoso")
      },
      error => this.errores = parsearErrorAPI(error)
      )
  }
}
