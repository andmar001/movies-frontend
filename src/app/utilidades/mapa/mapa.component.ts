import { Component } from '@angular/core';
import { LeafletMouseEvent, Marker,marker, latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 15,
    center: latLng(21.018316539130748,-101.26773525385944) //latitud y longitud
  };

  capas:Marker<any>[] = []

  manejarClick(event: LeafletMouseEvent ){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log(latitud,longitud)

    this.capas = []
    this.capas.push(marker([latitud,longitud]))
  }


}
