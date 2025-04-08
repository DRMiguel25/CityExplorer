import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Agregar
import { BrowserModule } from '@angular/platform-browser';

import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

import { PaginatorModule } from 'primeng/paginator';
import { UsuariosRoutingModule } from './usuarios-routing.module'; // ✅ Importar el módulo de rutas

@NgModule({
  declarations: [
    InicioSesionComponent,  // Descomentado
    LoginComponent,         // Descomentado
    RegistroComponent      // Descomentado
  ],
  imports: [
    CommonModule,
    FormsModule, // ✅ Necesario para formularios
    ReactiveFormsModule, // ✅ Para los formularios reactivos
    UsuariosRoutingModule, // ✅ Importar el módulo de rutas
    PaginatorModule,
    BrowserModule
  ],
})
export class UsuariosModule { }
