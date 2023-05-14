import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.scss']
})
export class CrearGeneroComponent {

  constructor(
    private _router:Router
  ) { }

  guardarCambios(){
    this._router.navigate(['/generos']);
  }

}
