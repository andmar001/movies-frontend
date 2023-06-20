import { Injectable } from '@angular/core';
import { generoCreacionDTO, generoDTO } from './genero';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private apiURL = environment.apiURL + 'generos';

  constructor(private _http:HttpClient) { }

  public obtenerTodos(pagina:number, cantidadRegistrosAMostrar:number):Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina',pagina.toString());
    params = params.append('recordsPorPagina',cantidadRegistrosAMostrar.toString());

    return this._http.get<generoDTO[]>(this.apiURL,{observe:'response' ,params})
  }

  public obtenerPorId(id:number):Observable<generoDTO>{
    return this._http.get<generoDTO>(`${this.apiURL}/${id}`);
  }

  public crear(genero:generoCreacionDTO){
    return this._http.post(this.apiURL, genero)
  }

  public editar(id:number, genero:generoCreacionDTO){
    return this._http.put(`${this.apiURL}/${id}`, genero)
  }

  public borrar(id:number){
    return this._http.delete(`${this.apiURL}/${id}`)
  }
}
