import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cine';
import { Coordenada } from 'src/app/utilidades/mapa/coordenada';

@Component({
  selector: 'app-formulario-cines',
  templateUrl: './formulario-cines.component.html',
  styleUrls: ['./formulario-cines.component.scss']
})
export class FormularioCinesComponent {

  constructor(
    private _formBuilder:FormBuilder
  ){}

  form:FormGroup;

  @Input()
  errores:string[] = [];

  @Input()
  modelo:cineCreacionDTO;

  @Output()
  guardarCambios:EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadaInicial:Coordenada[] = [];

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nombre:[
        '',
        {
          validators:[Validators.required]
        }
      ],
      latitud:[
        '',
        {
          validators:[Validators.required]
        }
      ],
      longitud:[
        '',
        {
          validators:[Validators.required]
        }
      ]
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
      this.coordenadaInicial.push({latitud:this.modelo.latitud,longitud:this.modelo.longitud})
    }
  }

  coordenadaSeleccionada(coordenada:Coordenada){
    this.form.patchValue(coordenada)
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value)
  }
}
