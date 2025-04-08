import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

import { VistasRoutingModule } from './vistas-routing.module'; // ✅ Importar el módulo de rutas

import { CategoriasComponent } from './components/categorias/categorias.component';
import { HomeComponent } from './components/home/home.component';
import { CrearAnuncioComponent } from './components/crear-anuncio/crear-anuncio.component'; // ✅ Importar el componente CrearAnuncioComponent
import { HomeAnuncianteComponent } from './components/home-anunciante/home-anunciante.component';

@NgModule({
  declarations: [
    CategoriasComponent,
    HomeComponent,
    HomeAnuncianteComponent,
    CrearAnuncioComponent,
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
