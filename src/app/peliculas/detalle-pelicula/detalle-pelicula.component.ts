import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDTO } from '../pelicula';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Coordenada, CoordenadaConMensaje } from 'src/app/utilidades/mapa/coordenada';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  constructor(
    private _peliculasService:PeliculasService,
    private _activatedRoute:ActivatedRoute,
    private _domSanitizer:DomSanitizer //para evitar que el usuario inyecte codigo malicioso
    ) { }

    pelicula:PeliculaDTO;
    fechaLanzamiento:Date;
    trailerUrl:SafeResourceUrl;  //para evitar que el usuario inyecte codigo malicioso
    coordenadas:CoordenadaConMensaje[] = [];

    ngOnInit(): void {
      //obtener id por parametro
      this._activatedRoute.params.subscribe( params => {
        this._peliculasService.obtenerPorId(params['id']).subscribe( pelicula => {
          console.log(pelicula);
          this.pelicula = pelicula;
          this.fechaLanzamiento = new Date(this.pelicula.fechaLanzamiento);
          this.trailerUrl = this.generarUrlYoutubeEmbed(this.pelicula.trailer);
          this.coordenadas = pelicula.cines.map( cine => {
            return {
              latitud: cine.latitud,
              longitud: cine.longitud,
              mensaje: cine.nombre
            };
          })
        });
      });
    }

    //metodo para generar la url de youtube
    generarUrlYoutubeEmbed(url:any):SafeResourceUrl{
      if (!url) {
        return '';
      }

      var video_id = url.split('v=')[1];
      var posicionAmpersand = video_id.indexOf('&');
      if (posicionAmpersand !== -1){
        video_id = video_id.substring(0, posicionAmpersand);
      }

      return this._domSanitizer
        .bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video_id}`)
        //para evitar que el usuario inyecte codigo malicioso
    }

}
