import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { credencialesUsuario } from '../seguridad';

@Component({
  selector: 'app-formulario-autenticacion',
  templateUrl: './formulario-autenticacion.component.html',
  styleUrls: ['./formulario-autenticacion.component.scss']
})
export class FormularioAutenticacionComponent implements OnInit {

  form:FormGroup;

  @Input()
  errores:string[] = [];

  @Input()
  accion:string;

  @Output()
  onSubmit:EventEmitter<credencialesUsuario> = new EventEmitter<credencialesUsuario>();

  constructor( private _formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email:['',{
        validators:[Validators.required, Validators.email]
      }],
      password:['',{
        validators:[Validators.required]
      }]
    })
  }

  obtenerMensajeErrorEmail(){
    var campo = this.form.get('email');
    if(campo.hasError('required')){
      return 'El campo email es requerido';
    }
    if(campo.hasError('email')){
      return 'El campo email debe ser un email valido';
    }
    return '';
  }


}
