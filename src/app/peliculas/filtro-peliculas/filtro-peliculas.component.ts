import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.scss'],
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _location:Location,
    private _activatedRoute:ActivatedRoute) {}

  form: FormGroup;

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Accion' },
    { id: 3, nombre: 'Comedia' },
  ];

  peliculas = [
    {
      titulo: 'spiderman',
      enCines: false,
      proximosEstrenos: true,
      generos: [1, 2],
      poster:
        'https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg',
    },
    {
      titulo: 'moana',
      enCines: true,
      proximosEstrenos: false,
      generos: [3],
      poster:
        'https://cdn.pixabay.com/photo/2021/02/08/19/18/moana-5996159_1280.png',
    },
    {
      titulo: 'dragon ball z',
      enCines: false,
      proximosEstrenos: false,
      generos: [1, 3],
      poster:
        'https://cdn.pixabay.com/photo/2018/09/28/09/13/anime-3708776_640.png',
    },
  ];

  peliculasOriginal = this.peliculas;

  fomrularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  ngOnInit(): void {
    this.form = this._formBuilder.group(
      this.fomrularioOriginal
    );

    this.leerValoresURL();
    this.buscarPeliculas(this.form.value)

    //Values changes 'observable' para hacer eventos reactivos y cargar nuestro filtro de busqueda
    this.form.valueChanges.subscribe((valores) => {
      this.peliculas = this.peliculasOriginal; // resetear las peliculas al hacer nueva busqueda
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnURL()
    });
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
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.titulo.indexOf(valores.titulo) !== -1
      );
    }
    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.generos.indexOf(valores.generoId) !== -1
      );
    }
    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.proximosEstrenos
      );
    }
    if (valores.enCines) {
      this.peliculas = this.peliculas.filter((pelicula) => pelicula.enCines);
    }
  }

  limpiar() {
    this.form.patchValue(this.fomrularioOriginal)
  }
}
