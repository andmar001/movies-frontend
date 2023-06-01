import { Component, Input } from '@angular/core';
import { MultipleSelectorModel } from './MultipleSelector';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.scss']
})
export class SelectorMultipleComponent {

  constructor(){}

  @Input()
  Seleccionados:MultipleSelectorModel[] = [];

  @Input()
  NoSeleccionados:MultipleSelectorModel[] = [];

  ngOnInit(): void {

  }

  seleccionar(item:MultipleSelectorModel, index:number){
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index,1)
  }

  deseleccionar(item:MultipleSelectorModel, index:number){
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index,1)
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados);  //enviar todo de arreglo seleccionado a no seleccionado
    this.NoSeleccionados = []
  }
  
  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);  //enviar todo de arreglo seleccionado a no seleccionado
    this.Seleccionados = []
  }

}
