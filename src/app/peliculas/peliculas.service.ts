import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { LandingPageDTO, PeliculaCreacionDTO, PeliculaDTO, PeliculaPostGet, PeliculaPutGet } from './pelicula';
import { formatearFecha } from '../utilidades/utilidades';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private _http: HttpClient) {}

  private apiURL = environment.apiURL + 'peliculas';

  public obtenerLandingPage(): Observable<LandingPageDTO> {
    return this._http.get<LandingPageDTO>(this.apiURL);
  }

  public obtenerPorId(id: number): Observable<PeliculaDTO> {
    return this._http.get<PeliculaDTO>(`${this.apiURL}/${id}`);
  }

  public PostGet(): Observable<PeliculaPostGet> {
    return this._http.get<PeliculaPostGet>(`${this.apiURL}/PostGet`);
  }

  public PutGet(id: number): Observable<PeliculaPutGet> {
    return this._http.get<PeliculaPutGet>(`${this.apiURL}/PutGet/${id}`);
  }

  public filtrar(valores: any): Observable<any> {
    const params = new HttpParams({ fromObject: valores });
    return this._http.get<PeliculaDTO>(`${this.apiURL}/filtrar`, {
      params,
      observe: 'response',
    });
  }

  public crear(pelicula: PeliculaCreacionDTO) {
    const formData = this.ConstruirFormData(pelicula);

    return this._http.post(this.apiURL, formData);
  }

  public editar(id: number, pelicula: PeliculaCreacionDTO) {
    const formData = this.ConstruirFormData(pelicula);

    return this._http.put(`${this.apiURL}/${id}`, formData);
  }

  public borrar(id: number) {
    return this._http.delete(`${this.apiURL}/${id}`);
  }

  public ConstruirFormData(pelicula: PeliculaCreacionDTO): FormData {
    const formData = new FormData();

    formData.append('titulo', pelicula.titulo);
    formData.append('resumen', pelicula.resumen);
    formData.append('trailer', pelicula.trailer);
    formData.append('enCines', String(pelicula.enCines));

    if (pelicula.fechaLanzamiento) {
      formData.append(
        'fechaLanzamiento',
        formatearFecha(pelicula.fechaLanzamiento)
      );
    }
    if (pelicula.poster) {
      formData.append('poster', pelicula.poster);
    }

    formData.append('generosIds', JSON.stringify(pelicula.generosIds));
    formData.append('cinesIds', JSON.stringify(pelicula.cinesIds));
    formData.append('actores', JSON.stringify(pelicula.actores));

    return formData;
  }
}
