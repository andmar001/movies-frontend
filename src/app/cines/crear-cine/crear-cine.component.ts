import { Component } from '@angular/core';
import { cineCreacionDTO } from '../cine';
import { Router } from '@angular/router';
import { CinesService } from '../cines.service';
import { parsearErrorAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.scss']
})
export class CrearCineComponent {

  errores :string[]= []

  constructor(
    private _router:Router,
    private _cinesServices:CinesService){}

  guardarCambios(cine:cineCreacionDTO){
    this._cinesServices.crear(cine)
      .subscribe(()=>{
        this._router.navigate(['/cines']);
      },
      (error) =>{
        this.errores = parsearErrorAPI(error)
      })
  }

}
