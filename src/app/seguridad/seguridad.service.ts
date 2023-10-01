import { Injectable } from '@angular/core';
import { credencialesUsuario, respuestaAutenticacion, usuarioDTO } from './seguridad';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor( private _httpClient:HttpClient ) { }

  baseURL = environment.apiURL + 'cuentas';
  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'token-expiracion';
  private readonly campoRol = 'role';

  obtenerUsuarios(pagina:number, recordsPorPagina:number):Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', recordsPorPagina.toString());
    return this._httpClient.get<usuarioDTO[]>(`${this.baseURL}/listadoUsuarios`, {observe: 'response', params});
  }

  hacerAdmin( usuarioId:string ){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._httpClient.post(`${this.baseURL}/HacerAdmin`, JSON.stringify(usuarioId), {headers});
  }

  removerAdmin( usuarioId:string ){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._httpClient.post(`${this.baseURL}/RemoverAdmin`, JSON.stringify(usuarioId), {headers});
  }

  estaLogueado():boolean{
    const token = localStorage.getItem(this.llaveToken);

    if(!token){
      return false;
    }
    // examinar la fecha de expiracion
    const expiracion = localStorage.getItem(this.llaveExpiracion);
    const expiracionFecha = new Date(expiracion);

    if(expiracionFecha <= new Date()){
      this.logOut();
      return false;
    }
    return true;
  }

  // Desloguear al usuario
  logOut(){
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
  }

  obtenerRol():string{
    return this.obtenerCampoJWT(this.campoRol);
  }

  obtenerCampoJWT(campo:string):string{
    const token = localStorage.getItem(this.llaveToken);

    if(!token){
      return '';
    }

    const datosToken = JSON.parse(atob(token.split('.')[1]));

    return datosToken[campo];
  }

  registrar(credenciales:credencialesUsuario):Observable<respuestaAutenticacion>{
    return this._httpClient.post<respuestaAutenticacion>(this.baseURL + '/crear', credenciales);
  }

  login(credenciales:credencialesUsuario):Observable<respuestaAutenticacion>{
    return this._httpClient.post<respuestaAutenticacion>(this.baseURL + '/login', credenciales);
  }

  guardarToken(respuestaAutenticacion:respuestaAutenticacion){
    localStorage.setItem(this.llaveToken, respuestaAutenticacion.token);
    localStorage.setItem(this.llaveExpiracion, respuestaAutenticacion.expiracion.toString());
  }

  obtenerToken(){
    return localStorage.getItem(this.llaveToken);
  }
}
