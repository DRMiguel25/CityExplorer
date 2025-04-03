import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Importa RouterModule

import { AppRoutingModule } from './app-routing.module';  // Si tienes un módulo de rutas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasComponent } from './vistas/components/categorias/categorias.component'; // ✅ Importar el módulo
@NgModule({
  declarations: [AppComponent, CategoriasComponent,],
  imports: [
    BrowserModule,
    RouterModule,  // Asegúrate de importar RouterModule aquí
    AppRoutingModule,  // Asegúrate de agregar el AppRoutingModule si lo tienes
    BrowserAnimationsModule,

    UsuariosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
