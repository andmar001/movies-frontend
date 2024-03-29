import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelector';
import { actorPeliculaDTO } from 'src/app/actores/actor';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.scss']
})
export class EditarPeliculaComponent implements OnInit{

  constructor( private _peliculasService:PeliculasService,
               private _activatedRoute:ActivatedRoute,
               private _router:Router ) { }

  modelo:PeliculaDTO;
  generosSeleccionados:MultipleSelectorModel[] = [];
  generosNoSeleccionados:MultipleSelectorModel[] = [];
  cinesSeleccionados:MultipleSelectorModel[] = [];
  cinesNoSeleccionados:MultipleSelectorModel[] = [];
  actoresSeleccionados:actorPeliculaDTO[] = [];

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params =>{
      this._peliculasService.PutGet(params['id'])
        .subscribe( peliculaPutGet => {
          this.modelo = peliculaPutGet.pelicula;

          this.generosNoSeleccionados = peliculaPutGet.generosNoSeleccionados.map(genero =>{
            return <MultipleSelectorModel>{llave:genero.id, valor:genero.nombre}
          });

          this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map(genero =>{
            return <MultipleSelectorModel>{llave:genero.id, valor:genero.nombre}
          });

          this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map(cine =>{
            return <MultipleSelectorModel>{llave:cine.id, valor:cine.nombre}
          });

          this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map(cine =>{
            return <MultipleSelectorModel>{llave:cine.id, valor:cine.nombre}
          });

          this.actoresSeleccionados = peliculaPutGet.actores;
        })
    })
  }

  guardarCambios(pelicula:PeliculaCreacionDTO){
    this._peliculasService.editar(this.modelo.id, pelicula)
      .subscribe( () => {
        this._router.navigate(['/pelicula/' + this.modelo.id]);
      })
  }

}
