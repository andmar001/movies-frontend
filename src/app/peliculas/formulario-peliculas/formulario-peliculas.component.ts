import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelector';
import { actorPeliculaDTO } from 'src/app/actores/actor';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.scss']
})
export class FormularioPeliculasComponent implements OnInit {

  constructor(
    private _formBuilder:FormBuilder
  ){}

  form:FormGroup;

  @Input()
  errores:string[] = [];

  @Input()
  modelo:PeliculaDTO;

  @Output()
  OnSubmit:EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  @Input()
  generosNoSeleccionados:MultipleSelectorModel[] = [];

  @Input()
  generosSeleccionados:MultipleSelectorModel[] = [];

  @Input()
  cinesNoSeleccionados:MultipleSelectorModel[] = [];

  @Input()
  cinesSeleccionados:MultipleSelectorModel[] = [];

  @Input()
  actoresSeleccionados:actorPeliculaDTO[] = [];

  imagenCambiada = false;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      titulo:[
        '',
        {
          validators:[Validators.required]
        }
      ],
      resumen:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:'',
      generosIds:'',
      cinesIds:'',
      actores:''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }

  archivoSeleccionado(archivo:File){
    this.form.get('poster').setValue(archivo);
    this.imagenCambiada = true;
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }

  guardarCambios(){
    console.log(this.generosSeleccionados)
    const generosIds = this.generosSeleccionados.map(val => val.llave)  //guardar informacion de generos seleccionados
    this.form.get('generosIds').setValue(generosIds);
    const cinesIds = this.cinesSeleccionados.map(val => val.llave)  //guardar informacion de generos seleccionados
    this.form.get('cinesIds').setValue(cinesIds);

    const actores = this.actoresSeleccionados.map(val => {
      return {id:val.id, personaje:val.personaje}
    })

    this.form.get('actores').setValue(actores);

    if (!this.imagenCambiada) {
      this.form.patchValue({'poster':null})
    }

    this.OnSubmit.emit(this.form.value)
  }
}
