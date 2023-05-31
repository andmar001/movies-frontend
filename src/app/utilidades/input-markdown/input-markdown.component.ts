import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.scss'],
})
export class InputMarkdownComponent implements OnInit {
  @Input()
  contenidoMarkdown = ''

  @Input()
  placeHolderTextarea:string = 'Texto'

  @Output()
  changeMarkdown = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.contenidoMarkdown)
  }

}
