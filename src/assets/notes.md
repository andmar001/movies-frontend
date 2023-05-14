# uso de ng container
- ng-container es un elemento que no se renderiza en el DOM, pero que sirve para agrupar elementos y aplicarles directivas

# extensiones
- icono - fluent icons
- prev image - image preview
- version - version lens

# rating component
<app-rating (rated)="manajarRated($event)" ></app-rating>

# referencia a un elemento del DOM
<input type="file" style="display: none;" #cargador>
<button (click)="cargador.click()">Cargar Archivo</button>
