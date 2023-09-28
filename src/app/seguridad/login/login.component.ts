import { Component } from '@angular/core';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';
import { Router } from '@angular/router';
import { parsearErrorAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private _seguridadService:SeguridadService,
               private _router:Router) { }

  errores:string[] = [];

  login( credencialesUsuario:credencialesUsuario){
    this._seguridadService.login(credencialesUsuario)
      .subscribe(respuesta => {
        console.log(respuesta);
        this._seguridadService.guardarToken(respuesta);
        this._router.navigate(['/']);
      },
      errores => {
        this.errores = parsearErrorAPI(errores);
      })
  }
}
