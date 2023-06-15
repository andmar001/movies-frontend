import { Injectable } from '@angular/core';
import { generoCreacionDTO, generoDTO } from './genero';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private apiURL = environment.apiURL + 'generos';

  constructor(private _http:HttpClient) { }

  public obtenerTodos():Observable<generoDTO[]>{
    return this._http.get<generoDTO[]>(this.apiURL)
  }

  public crear(genero:generoCreacionDTO){
    return this._http.post(this.apiURL, genero)
  }

}
