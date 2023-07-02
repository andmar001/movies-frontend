import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { actorCreacionDTO, actorDTO } from './actor';
import { HttpClient, HttpParams } from '@angular/common/http';
import { formatearFecha } from '../utilidades/utilidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor( private _http:HttpClient ) { }

  private apiURL = environment.apiURL + 'actores';

  public obtenerTodos(pagina:number, cantidadRegistrosAMostrar:number){
    let params = new HttpParams();
    params = params.append('pagina',pagina.toString());
    params = params.append('recordsPorPagina',cantidadRegistrosAMostrar.toString());

    return this._http.get<actorDTO[]>(this.apiURL,{observe:'response' ,params})
  }

  public obtenerPorId(id:number):Observable<actorDTO>{
    return this._http.get<actorDTO>(`${this.apiURL}/${id}`);
  }

  public crear(actor:actorCreacionDTO){
    const formData = this.construirFormData(actor);
    return this._http.post(this.apiURL, formData);
  }

  public editar(id:number, actor:actorCreacionDTO){
    const formData = this.construirFormData(actor);
    return this._http.put(`${this.apiURL}/${id}`, formData);
  }

  private construirFormData(actor:actorCreacionDTO):FormData{
    const formData = new FormData();

    formData.append('nombre', actor.nombre);
    // si existen los campos los agregamos formData, ya que no son obligatorios
    if (actor.biografia) {
      formData.append('biografia', actor.biografia);
    }
    if(actor.fechaNacimiento){
      formData.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento));
    }
    if (actor.foto) {
      formData.append('foto', actor.foto);
    }
    return formData;
  }

  public borrar (id:number){
    return this._http.delete(`${this.apiURL}/${id}`);
  }
}
