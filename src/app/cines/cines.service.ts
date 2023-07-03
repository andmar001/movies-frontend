import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { cineCreacionDTO, cineDTO } from './cine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  constructor( private _http:HttpClient) { }

  private apiURL = environment.apiURL + 'cines';

  public obtenerTodos(pagina:number, cantidadRegistrosAMostrar:number):Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina',pagina.toString());
    params = params.append('recordsPorPagina',cantidadRegistrosAMostrar.toString());

    return this._http.get<cineDTO[]>(this.apiURL,{observe:'response' ,params})
  }

  public obtenerPorId(id:number):Observable<cineDTO>{
    return this._http.get<cineDTO>(`${this.apiURL}/${id}`);
  }

  public crear(cine:cineCreacionDTO){
    return this._http.post(this.apiURL,cine);
  }

  public editar(id:number,cine:cineCreacionDTO){
    return this._http.put(`${this.apiURL}/${id}`,cine);
  }

  public borrar(id:number){
    return this._http.delete(`${this.apiURL}/${id}`);
  }
}
