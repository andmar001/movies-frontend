import { Component } from '@angular/core';
import { actorDTO } from '../actor';
import { ActoresService } from '../actores.service';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.scss']
})
export class IndiceActoresComponent {

  constructor( private _actoresService:ActoresService ){}

  actores:actorDTO[]
  //para tabla
  columnasAMostrar = ['id','nombre','acciones']

  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar)
  }


  cargarRegistros (pagina:number, cantidadElementosAMostrar:number){
    this._actoresService.obtenerTodos(pagina,cantidadElementosAMostrar)
    .subscribe((respuesta:HttpResponse<actorDTO[]>) =>{
      this.actores = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros")
    },
    error => console.log(error))
  }

  // evento para paginar la tabla
  actualizarPaginacion(datos:PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar)
  }

  borrar(id:number){
    this._actoresService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
    },
    error => console.log(error)
    )
  }

}
