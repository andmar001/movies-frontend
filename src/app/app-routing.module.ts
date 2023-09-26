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
import { EsAdminGuard } from './es-admin.guard';
import { LoginComponent } from './seguridad/login/login.component';

const routes: Routes = [
  {
    path:'', component: LangingPageComponent
  },
  {
    path:'generos', component: IndiceGenerosComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'generos/crear', component: CrearGeneroComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'generos/editar/:id', component: EditarGeneroComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'actores', component: IndiceActoresComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'actores/crear', component: CrearActorComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'actores/editar/:id', component: EditarActorComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'cines', component: IndiceCinesComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'cines/crear', component: CrearCineComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path : 'cines/editar/:id', component: EditarCineComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'peliculas/crear', component: CrearPeliculaComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'peliculas/editar/:id', component: EditarPeliculaComponent, canActivate: [ EsAdminGuard ]
  },
  {
    path:'peliculas/buscar', component:FiltroPeliculasComponent
  },
  {
    path:'pelicula/:id', component:DetallePeliculaComponent
  },
  {
    path:'login', component:LoginComponent
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
