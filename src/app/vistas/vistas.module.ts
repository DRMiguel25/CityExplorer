import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

import { VistasRoutingModule } from './vistas-routing.module'; // ✅ Importar el módulo de rutas

//vistas
import { CategoriaVistaComponent } from './components/categoria-vista/categoria-vista.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

import { CrearActualizarAnuncioComponent } from './components/crear-actualizar-anuncio/crear-actualizar-anuncio.component';
import { DestinosVistaComponent } from './components/destinos/destinos.component';


import { HomeComponent } from './components/home/home.component';
import { HomeAnuncianteComponent } from './components/home-anunciante/home-anunciante.component';

import { navbarComponent } from './components/navbar/navbar.component';
import { VistaDetalladaAnuncioComponent } from './components/vista-detallada-anuncio/vista-detallada-anuncio.component';

import { VistaDetalladaDestinoComponent } from './components/vista-detallada-destino/vista-detallada-destino.component';
@NgModule({
  declarations: [
    CategoriasComponent,
    HomeComponent,
    HomeAnuncianteComponent,
    CrearActualizarAnuncioComponent,
    VistaDetalladaAnuncioComponent,
    navbarComponent,
    CategoriaVistaComponent,
    DestinosVistaComponent,
    VistaDetalladaDestinoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    VistasRoutingModule
  ],
})
export class VistasModule { }
