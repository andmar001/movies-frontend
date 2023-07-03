import { Component } from '@angular/core';
import { cineDTO } from '../cine';
import { CinesService } from '../cines.service';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-cines',
  templateUrl: './indice-cines.component.html',
  styleUrls: ['./indice-cines.component.scss']
})
export class IndiceCinesComponent {

  constructor( private _cinesService:CinesService ){}

  cines:cineDTO[]
  //para tabla
  columnasAMostrar = ['id','nombre','acciones']

  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar)
  }

  cargarRegistros (pagina:number, cantidadElementosAMostrar:number){
    this._cinesService.obtenerTodos(pagina,cantidadElementosAMostrar)
    .subscribe((respuesta:HttpResponse<cineDTO[]>) =>{
      this.cines = respuesta.body;
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
    this._cinesService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
    },
    error => console.log(error)
    )
  }

}
