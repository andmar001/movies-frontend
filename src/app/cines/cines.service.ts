import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { cineCreacionDTO } from './cine';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  constructor( private _http:HttpClient) { }

  private apuURL = environment.apiURL + 'cines';

  public crear(cine:cineCreacionDTO){
    return this._http.post(this.apuURL,cine);
  }
}
