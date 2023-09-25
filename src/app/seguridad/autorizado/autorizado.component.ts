import { Component, Input } from '@angular/core';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-autorizado',
  templateUrl: './autorizado.component.html',
  styleUrls: ['./autorizado.component.scss']
})
export class AutorizadoComponent {

  constructor(private _seguridadService:SeguridadService) { }

  @Input()
  rol:string;

  estaAutorizado():boolean{
    if(this.rol){
      return this._seguridadService.obtenerRol() == this.rol;
    }
    else{
      return this._seguridadService.estaLogueado();
    }
  }

}
