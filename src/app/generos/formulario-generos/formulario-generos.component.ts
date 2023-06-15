import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-generos',
  templateUrl: './formulario-generos.component.html',
  styleUrls: ['./formulario-generos.component.scss']
})
export class FormularioGenerosComponent {

  constructor(
    private _formBuilder:FormBuilder
  ) { }

  form:FormGroup;

  @Input()
  errores: string[]=[];

  @Input()
  modelo: generoCreacionDTO;


  @Output()
  onSubmit:EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nombre: ['',{
        validators:[Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }]
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value)
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre'); // get the field value

    if (campo.hasError('required'))
      return 'El campo nombre es requerido';
    if (campo.hasError('minlength'))
      return 'La longitud mínima es de 3 caracteres';
    if(campo.hasError('primeraLetraMayuscula'))
      return campo.getError('primeraLetraMayuscula').mensaje;

    return '';
  }

}
