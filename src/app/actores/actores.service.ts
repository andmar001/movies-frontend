import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { actorCreacionDTO } from './actor';
import { HttpClient } from '@angular/common/http';
import { formatearFecha } from '../utilidades/utilidades';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor( private _http:HttpClient ) { }

  private apiURL = environment.apiURL + 'actores';

  public crear(actor:actorCreacionDTO){
    const formData = this.construirFormData(actor);
    return this._http.post(this.apiURL, formData);
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
}
