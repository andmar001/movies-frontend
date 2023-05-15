import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      nombre: '',
    });

  }

  guardarCambios(){
    this._router.navigate(['/generos']);
  }

}
