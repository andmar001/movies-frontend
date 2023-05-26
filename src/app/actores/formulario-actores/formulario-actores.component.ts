import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.scss']
})
export class FormularioActoresComponent implements OnInit{

  @Input()
  modelo:actorDTO

  @Output()
  submit:EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  constructor( private _formBuilder:FormBuilder ){}

  form:FormGroup;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nombre :[
        '',
        {
          validators:[ Validators.required ]
        }
      ],
      fechaNacimiento:'',
      foto:''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  archivoSeleccionado(file){
    this.form.get('foto').setValue(file)
  }

  onSubmit(){
    this.submit.emit(this.form.value)
  }

}
