import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.scss']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private _router:Router) {}

  modelo:generoCreacionDTO = {
    nombre:'Drama'
  }

  ngOnInit(): void {

  }

  guardarCambios(genero:generoCreacionDTO){
    console.log(genero)
    this._router.navigate(['/generos'])
  }

}
