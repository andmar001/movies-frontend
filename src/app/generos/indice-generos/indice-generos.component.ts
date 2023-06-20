import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.scss']
})
export default class IndiceGenerosComponent implements OnInit {

  constructor( private _generosService:GenerosService ){}

  generos:generoDTO[]
  //para tabla
  columnasAMostrar = ['id','nombre','acciones']

  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar)
  }


  cargarRegistros (pagina:number, cantidadElementosAMostrar:number){
    this._generosService.obtenerTodos(pagina,cantidadElementosAMostrar)
    .subscribe((respuesta:HttpResponse<generoDTO[]>) =>{
      this.generos = respuesta.body;
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

}
