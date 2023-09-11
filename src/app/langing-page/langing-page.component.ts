import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas/peliculas.service';
import { PeliculaDTO, LandingPageDTO } from '../peliculas/pelicula';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LangingPageComponent implements OnInit {

  constructor( private _peliculasService:PeliculasService ) { }

  ngOnInit(): void {
    this._peliculasService.obtenerLandingPage().subscribe(landingPage => {
      this.peliculasEnCines = landingPage.enCines;
      this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
    });
  }

  peliculasEnCines:PeliculaDTO[];

  peliculasProximosEstrenos:PeliculaDTO[];

  manajarRated(voto:number):void {
    alert(voto)
  }


}
