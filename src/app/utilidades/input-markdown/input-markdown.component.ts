import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.scss'],
})
export class InputMarkdownComponent {

  contenidoMarkdown = ''

  @Output()
  changeMarkdown = new EventEmitter<string>();

  inputTextArea(texto:string){
    this.contenidoMarkdown = texto
    this.changeMarkdown.emit(texto)
  }

}
