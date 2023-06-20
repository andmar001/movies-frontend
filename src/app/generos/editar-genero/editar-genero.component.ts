import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoCreacionDTO, generoDTO } from '../genero';
import { GenerosService } from '../generos.service';
import { parsearErrorAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.scss'],
})
export class EditarGeneroComponent implements OnInit {
  constructor(
    private _router: Router,
    private _generosService: GenerosService,
    private _activated_route: ActivatedRoute //Para obtener el id de la url
  ) {}

  modelo: generoDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this._activated_route.params.subscribe((params) => {
      this._generosService.obtenerPorId(params['id']).subscribe(
        (genero) => {
          this.modelo = genero;
        },
        () => this._router.navigate(['/generos'])
      );
    });
  }

  guardarCambios(genero: generoCreacionDTO) {
    this._generosService.editar(this.modelo.id, genero).subscribe(
      () => {
        this._router.navigate(['/generos']);
      },
      (error) => {
        this.errores = parsearErrorAPI(error);
      }
    );
  }
}
