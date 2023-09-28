import { Component } from '@angular/core';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';
import { parsearErrorAPI } from 'src/app/utilidades/utilidades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  constructor( private _seguridadService:SeguridadService,
               private _router:Router ) { }

  errores:string[] = [];

  registrar(credenciales:credencialesUsuario){
    this._seguridadService.registrar(credenciales)
      .subscribe(respuesta =>{
        console.log(respuesta);
        this._seguridadService.guardarToken(respuesta);
        this._router.navigate(['/']);
      },
      errores => {
        this.errores = parsearErrorAPI(errores);
      })
  }

}
