import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.scss']
})
export class CrearGeneroComponent implements OnInit {

  constructor(
    private _router:Router,
    private _formBuilder:FormBuilder
  ) { }

  form:FormGroup;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nombre: ['',{
        validators:[Validators.required, Validators.minLength(3)]
      }]
    });

  }

  guardarCambios(){
    this._router.navigate(['/generos']);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre'); // get the field value

    if (campo.hasError('required'))
      return 'El campo nombre es requerido';
    if (campo.hasError('minlength'))
      return 'La longitud mínima es de 3 caracteres';

    return '';
  }

}
