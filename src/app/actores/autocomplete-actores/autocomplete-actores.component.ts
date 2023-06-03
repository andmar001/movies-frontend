import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.scss']
})
export class AutocompleteActoresComponent implements OnInit{

  constructor(){}

  control:FormControl = new FormControl;   //manejar un campo de manera individual

  actores = [
    { nombre:'Tom Holland', personaje:'', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg/330px-Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg'},
    { nombre:'Tom Hanks', personaje:'', foto:'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_QL75_UY414_CR3,0,280,414_.jpg'},
    { nombre:'Samuel Jackson', personaje:'', foto:'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_QL75_UX100_CR0,1,100,148_.jpg'}
  ]

  actoresOriginal = this.actores;

  actoresSeleccionados = []

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table : MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor =>{
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);   // to filter
    });
  }

  optionSelected(event:MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('')
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre); // to find the index
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

}
