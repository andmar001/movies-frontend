import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.scss']
})
export class EditarActorComponent implements OnInit {

  constructor(
    private _activated_route: ActivatedRoute,
  ) { }

  modelo:actorCreacionDTO = {
    nombre:'Carla',
    fechaNacimiento: new Date
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
