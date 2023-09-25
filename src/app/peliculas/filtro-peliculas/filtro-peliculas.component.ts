import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { generoDTO } from 'src/app/generos/genero';
import { GenerosService } from 'src/app/generos/generos.service';
import { PeliculasService } from '../peliculas.service';
import { PeliculaDTO } from '../pelicula';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.scss'],
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _location:Location,
    private _activatedRoute:ActivatedRoute,
    private _generoService:GenerosService,
    private _peliculasService:PeliculasService) {}

  form: FormGroup;

  generos :generoDTO[] =[]
  paginaActual = 1;
  cantidadElementosAMostrar = 10;
  cantidadElementos;

  peliculas:PeliculaDTO[] = []

  fomrularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  ngOnInit(): void {

    this._generoService.obtenerTodos()
      .subscribe(generos => {
        this.generos = generos;

        this.form = this._formBuilder.group(
          this.fomrularioOriginal
        );

        this.leerValoresURL();
        this.buscarPeliculas(this.form.value)

        //Values changes 'observable' para hacer eventos reactivos y cargar nuestro filtro de busqueda
        this.form.valueChanges.subscribe((valores) => {
          this.buscarPeliculas(valores);
          this.escribirParametrosBusquedaEnURL()
        });
      })
  }

  //query strings
  private escribirParametrosBusquedaEnURL(){
    var queryString = [];

    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo) {
      queryString.push(`titulo=${valoresFormulario.titulo}`)
    }
    if (valoresFormulario.generoId != '0') {
      queryString.push(`generoId=${valoresFormulario.generoId}`)
    }
    if (valoresFormulario.proximosEstrenos) {
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`)
    }
    if (valoresFormulario.enCines) {
      queryString.push(`enCines=${valoresFormulario.enCines}`)
    }

    //colocar en la url el valor
    this._location.replaceState('peliculas/buscar', queryString.join('&'))
  }

  private leerValoresURL(){
    this._activatedRoute.queryParams.subscribe((params:any)=>{
      var objeto:any = {};

      if (params.titulo) {
        objeto.titulo = params.titulo;
      }
      if (params.generoId) {
        objeto.generoId = Number(params.generoId);
      }
      if (params.proximosEstrenos) {
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if (params.enCines) {
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto)

    });
  }

  buscarPeliculas(valores: any) {
    valores.pagina = this.paginaActual;
    valores.recordsPorPagina = this.cantidadElementosAMostrar;
    if (valores.titulo) {
      this._peliculasService.filtrar(valores).subscribe(response =>{
        this.peliculas = response.body;
        this.escribirParametrosBusquedaEnURL();
        this.cantidadElementos = response.headers.get('cantidadTotalRegistros');
      })
    }
  }

  limpiar() {
    this.form.patchValue(this.fomrularioOriginal)
  }

  paginatorUpdate( datos:PageEvent ){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadElementosAMostrar = datos.pageSize;
    this.buscarPeliculas(this.form.value);
  }
}
