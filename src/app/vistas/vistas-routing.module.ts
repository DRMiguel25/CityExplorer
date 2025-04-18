import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';  // Asegúrate de importar el AuthGuard

// Vistas
import { CategoriaVistaComponent } from './components/categoria-vista/categoria-vista.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CrearActualizarAnuncioComponent } from './components/crear-actualizar-anuncio/crear-actualizar-anuncio.component';
import { DestinosVistaComponent } from './components/destinos/destinos.component';
import { HomeComponent } from './components/home/home.component';
import { HomeAnuncianteComponent } from './components/home-anunciante/home-anunciante.component';
import { navbarComponent } from './components/navbar/navbar.component';
import { VistaDetalladaAnuncioComponent } from './components/vista-detallada-anuncio/vista-detallada-anuncio.component';
import { VistaDetalladaDestinoComponent } from './components/vista-detallada-destino/vista-detallada-destino.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
    canActivate: [AuthGuard], // Protege esta ruta
  },
  {
    path: 'categoria-vista/:categoria', 
    component: CategoriaVistaComponent,
  },
  {
    path: 'categorias', 
    component: CategoriasComponent,
  },
  {
    path: 'crear-actualizar-anuncio', 
    component: CrearActualizarAnuncioComponent,
    canActivate: [AuthGuard], // Protege esta ruta
  },
  {
    path: 'crear-actualizar-anuncio/:id', 
    component: CrearActualizarAnuncioComponent,
    canActivate: [AuthGuard], // Protege esta ruta
  },
  {
    path: 'destino-vista', 
    component: DestinosVistaComponent,
  },
  {
    path: 'app-home', 
    component: HomeComponent,
  },
  {
    path: 'home-anunciante/:id_usuario', 
    component: HomeAnuncianteComponent,
    canActivate: [AuthGuard], // Protege esta ruta
  },
  {
    path: 'navbar', 
    component: navbarComponent,
  },
  {
    path: 'vista-detallada-anuncio/:id', 
    component: VistaDetalladaAnuncioComponent,
    canActivate: [AuthGuard], // Protege esta ruta
  },
  {
    path: 'vista-detallada-destino/:id', 
    component: VistaDetalladaDestinoComponent,
  },
  {
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistasRoutingModule { }
