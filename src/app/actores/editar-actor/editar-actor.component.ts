import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';
import { ActoresService } from '../actores.service';
import { parsearErrorAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.scss']
})
export class EditarActorComponent implements OnInit {

  constructor(
    private _router: Router,
    private _actoresService: ActoresService,
    private _activated_route: ActivatedRoute //Para obtener el id de la url
  ) {}

  modelo: actorDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this._activated_route.params.subscribe((params) => {
      this._actoresService.obtenerPorId(params['id']).subscribe(
        (actor) => {
          this.modelo = actor;
        },
        () => this._router.navigate(['/actores'])
      );
    });
  }

  guardarCambios(actor: actorCreacionDTO) {
    this._actoresService.editar(this.modelo.id, actor).subscribe(
      () => {
        this._router.navigate(['/actores']);
      },
      (error) => {
        this.errores = parsearErrorAPI(error);
      }
    );
  }

}
