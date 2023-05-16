import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.scss']
})
export class CrearGeneroComponent {

  constructor( private _router:Router){}

  guardarCambios(genero:generoCreacionDTO){
    console.log(genero)
    this._router.navigate(['/generos']);
  }

}
