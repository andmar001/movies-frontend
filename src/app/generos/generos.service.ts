import { Injectable } from '@angular/core';
import { generoDTO } from './genero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private _http:HttpClient) { }

}
