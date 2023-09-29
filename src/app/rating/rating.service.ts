import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor( private _htppClient:HttpClient ) { }

  apuURL = environment.apiURL + 'rating';

  rate(peliculaId:number, puntuacion:number){
    return this._htppClient.post(this.apuURL, {peliculaId, puntuacion});
  }

}
