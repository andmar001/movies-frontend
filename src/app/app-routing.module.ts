import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingPageComponent } from './langing-page/langing-page.component';
import IndiceGenerosComponent from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';

const routes: Routes = [
  {
    path:'', component: LangingPageComponent
  },
  {
    path:'generos', component: IndiceGenerosComponent
  },
  {
    path:'generos/crear', component: CrearGeneroComponent
  },
  {
    path:'generos/editar/:id', component: EditarGeneroComponent
  },
  {
    path:'actores', component: IndiceActoresComponent
  },
  {
    path:'actores/crear', component: CrearActorComponent
  },
  {
    path:'actores/editar/:id', component: EditarActorComponent
  },
  {
    path:'cines', component: IndiceCinesComponent
  },
  {
    path:'cines/crear', component: CrearCineComponent
  },
  {
    path : 'cines/editar/:id', component: EditarCineComponent
  },
  {
    path:'peliculas/crear', component: CrearPeliculaComponent
  },
  {
    path:'peliculas/editar/:id', component: EditarPeliculaComponent
  },
  {
    path:'peliculas/buscar', component:FiltroPeliculasComponent
  },
  {
    path:'pelicula/:id', component:DetallePeliculaComponent
  },
  {
    path:'**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
