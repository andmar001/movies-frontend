import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelector';

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
  modelo:PeliculaDTO;

  @Output()
  OnSubmit:EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  generosNoSeleccionados:MultipleSelectorModel[] = [
    { llave:1,valor:'Drama'},
    { llave:2,valor:'Accion'},
    { llave:3,valor:'Comedia'},
    { llave:4,valor:'Terror'}
  ]

  generosSeleccionados:MultipleSelectorModel[] = []


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
      generosId:''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }


  archivoSeleccionado(archivo:File){
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);

  }

  guardarCambios(){
    console.log(this.generosSeleccionados)
    const generosIds = this.generosSeleccionados.map(val => val.llave)  //guardar informacion de generos seleccionados
    this.form.get('generosId').setValue(generosIds);
    this.OnSubmit.emit(this.form.value)
  }
}
