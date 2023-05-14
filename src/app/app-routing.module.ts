import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';

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
    path:'actores', component: IndiceActoresComponent
  },
  {
    path:'actores/crear', component: CrearActorComponent
  },
  {
    path:'cines', component: IndiceCinesComponent
  },
  {
    path:'cines/crear', component: CrearCineComponent
  },
  {
    path:'peliculas/crear', component: CrearPeliculaComponent
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
