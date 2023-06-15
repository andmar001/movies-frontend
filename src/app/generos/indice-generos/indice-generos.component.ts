import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.scss']
})
export default class IndiceGenerosComponent implements OnInit {

  constructor( private _generosService:GenerosService ){}

  generos:generoDTO[]
  //para tabla
  columnasAMostrar = ['id','nombre','acciones']

  ngOnInit(): void {
    this._generosService.obtenerTodos()
      .subscribe(generos =>{
        this.generos = generos;
      },
      error => console.log(error))
  }

}
