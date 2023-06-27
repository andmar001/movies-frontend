import { Component } from '@angular/core';
import { actorCreacionDTO } from '../actor';
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { parsearErrorAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.scss']
})
export class CrearActorComponent {

  constructor( private _actoresService:ActoresService,
               private _router:Router) { }

  errores:string[]=[];

  guardarCambios(actor:actorCreacionDTO){
    this._actoresService.crear(actor).subscribe(()=>{
      this._router.navigate(['/actores']);
    },
    errores =>{
      this.errores = parsearErrorAPI(errores);
    });
  }

}
