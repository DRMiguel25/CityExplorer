import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CrearAnuncioComponent } from './components/crear-anuncio/crear-anuncio.component';
import { HomeAnuncianteComponent } from './components/home-anunciante/home-anunciante.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent // Establece HomeComponent como la ruta predeterminada
  },
  {
    path: 'categorias', component: CategoriasComponent
  },
  {
    path: 'crear-anuncio', component: CrearAnuncioComponent
  },
  {
    path: 'home-anunciante', component: HomeAnuncianteComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full' // Redirige cualquier ruta no encontrada a la ruta principal
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistasRoutingModule { }
