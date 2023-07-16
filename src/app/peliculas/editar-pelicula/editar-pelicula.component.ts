import { Component } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.scss']
})
export class EditarPeliculaComponent {

  modelo:PeliculaDTO;

  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log(pelicula)
  }

}
