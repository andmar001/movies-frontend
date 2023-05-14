import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';

const routes: Routes = [
  {
    path:'', component: LangingPageComponent
  },
  {
    path:'generos', component: IndiceGenerosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
