import { Component } from '@angular/core';
import { usuarioDTO } from '../seguridad';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { SeguridadService } from '../seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-indice-usuarios',
  templateUrl: './indice-usuarios.component.html',
  styleUrls: ['./indice-usuarios.component.scss'],
})
export class IndiceUsuariosComponent {
  constructor(private _seguridadService: SeguridadService) {}

  usuarios: usuarioDTO[];
  //para tabla
  columnasAMostrar = ['nombre', 'acciones'];

  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this._seguridadService
      .obtenerUsuarios(pagina, cantidadElementosAMostrar)
      .subscribe(
        (respuesta: HttpResponse<usuarioDTO[]>) => {
          this.usuarios = respuesta.body;
          this.cantidadTotalRegistros = respuesta.headers.get(
            'cantidadTotalRegistros'
          );
        },
        (error) => console.log(error)
      );
  }

  // evento para paginar la tabla
  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  hacerAdmin(usuarioId: string) {
    this._seguridadService.hacerAdmin(usuarioId)
    .subscribe(() => {
      Swal.fire('Éxitoso', 'La operación se ha realizado', 'success');
    },
      (error) => console.log(error)
    );
  }

  removerAdmin(usuarioId: string) {
    this._seguridadService.removerAdmin(usuarioId)
    .subscribe(() => {
      Swal.fire('Éxitoso', 'La operación se ha realizado', 'success');
    },
      (error) => console.log(error)
    );

  }

}
