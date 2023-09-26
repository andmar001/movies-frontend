import { Injectable } from '@angular/core';
import { credencialesUsuario, respuestaAutenticacion } from './seguridad';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor( private _httpClient:HttpClient ) { }

  baseURL = environment.apiURL + 'cuentas';

  estaLogueado():boolean{
    return false;
  }

  obtenerRol():string{
    return 'admin';
  }

  registrar(credenciales:credencialesUsuario):Observable<respuestaAutenticacion>{
    return this._httpClient.post<respuestaAutenticacion>(this.baseURL + '/crear', credenciales);
  }
}
