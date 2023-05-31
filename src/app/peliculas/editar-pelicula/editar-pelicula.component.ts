import { Component } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.scss']
})
export class EditarPeliculaComponent {

  modelo:PeliculaDTO = {
    titulo: 'venom',
    trailer:'some',
    enCines:true,
    resumen:'lorem antonio andrade mares',
    fechaLanzamiento: new Date,
    poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Venom_Cosplay.jpg/480px-Venom_Cosplay.jpg'
  }

  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log(pelicula)
  }

}
