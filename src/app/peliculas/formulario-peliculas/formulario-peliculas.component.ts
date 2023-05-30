import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

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
      poster:''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value)
  }

  archivoSeleccionado(archivo:File){
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);

  }
}
