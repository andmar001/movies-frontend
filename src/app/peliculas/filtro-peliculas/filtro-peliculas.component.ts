import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.scss'],
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

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

    //Values changes 'observable' para hacer eventos reactivos y cargar nuestro filtro de busqueda
    this.form.valueChanges.subscribe((valores) => {
      this.peliculas = this.peliculasOriginal; // resetear las peliculas al hacer nueva busqueda
      this.buscarPeliculas(valores);
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
