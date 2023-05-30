import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeafletMouseEvent, Marker,marker, latLng, tileLayer, icon } from 'leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor(){}

  @Input()
  coordenadasIniciales:Coordenada[] = []

  @Output()
  coordenadaSeleccionada:EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {
    //mapear coordenadas
    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud]))
  }

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
    this.capas.push(marker([latitud,longitud],{
      icon:icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }))
    this.coordenadaSeleccionada.emit(
    {
      latitud:latitud,
      longitud:longitud
    });
  }


}
