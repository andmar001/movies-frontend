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

# navegacion por javascript
this.router.navigate(['/home']);

# parametros de ruta  -- activated route
constructor(private activatedRoute: ActivatedRoute) { }
ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({id}) => {
      console.log(id);
    });
  }
- para obtener los parametros de la ruta se debe usar activatedRoute

# wildcard - ruta por defecto
{ path: '**', redirectTo: 'home' }

# git - corregir ultimo commit
git commit --amend --no-edit

# markdown
npm i ngx-markdown

# npm i leaflet@1.7.1
# npm i @asymmetrik/ngx-leaflet@15.0.1
# npm i --save-dev @types/leaflet
to work with maps
configurar leaflet en angular.json - styles
