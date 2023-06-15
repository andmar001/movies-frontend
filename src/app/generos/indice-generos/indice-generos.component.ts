import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.scss']
})
export default class IndiceGenerosComponent implements OnInit {

  constructor( private _generosService:GenerosService ){}

  ngOnInit(): void {
    this._generosService.obtenerTodos()
      .subscribe(generos =>{
        console.log(generos)
      },
      error => console.log(error))
  }

}
