import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.scss']
})
export class FormularioActoresComponent implements OnInit{

  @Input()
  modelo:actorCreacionDTO

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
      fechaNacimiento:''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }

  }

  onSubmit(){
    this.submit.emit(this.form.value)
  }

}
