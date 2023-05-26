import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.scss']
})
export class EditarActorComponent implements OnInit {

  constructor(
    private _activated_route: ActivatedRoute,
  ) { }

  modelo:actorDTO = {
    nombre:'Carla',
    fechaNacimiento: new Date(),
    foto:'https://cdn.pixabay.com/photo/2016/03/31/20/27/actor-1295772_640.png'
  }

  ngOnInit(): void {
    this._activated_route.params.subscribe(params => {
      // alert(params['id']);
    })
  }

  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
  }

}
