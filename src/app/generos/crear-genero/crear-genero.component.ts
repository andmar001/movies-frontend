import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';
import { parsearErrorAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.scss']
})
export class CrearGeneroComponent {

  errores :string[]= []

  constructor(
    private _router:Router,
    private _generosService:GenerosService){}

  guardarCambios(genero:generoCreacionDTO){
    this._generosService.crear(genero)
      .subscribe(()=>{
        this._router.navigate(['/generos']);
      },
      (error) =>{
        this.errores = parsearErrorAPI(error)
      })
  }

}
