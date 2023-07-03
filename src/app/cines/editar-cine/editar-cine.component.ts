import { Component } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';
import { ActivatedRoute, Router } from '@angular/router';
import { CinesService } from '../cines.service';
import { parsearErrorAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.scss']
})
export class EditarCineComponent {

  constructor(
    private _router: Router,
    private _cinesService: CinesService,
    private _activated_route: ActivatedRoute //Para obtener el id de la url
  ) {}

  modelo: cineDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this._activated_route.params.subscribe((params) => {
      this._cinesService.obtenerPorId(params['id']).subscribe(
        (cine) => {
          this.modelo = cine;
        },
        () => this._router.navigate(['/cines'])
      );
    });
  }

  guardarCambios(cine: cineCreacionDTO) {
    this._cinesService.editar(this.modelo.id, cine).subscribe(
      () => {
        this._router.navigate(['/cines']);
      },
      (error) => {
        this.errores = parsearErrorAPI(error);
      }
    );
  }
}
