import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Agregar
import { HttpClientModule } from '@angular/common/http'; // ✅ Necesario para peticiones HTTP

import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [InicioSesionComponent, LoginComponent, RegistroComponent], // ✅ Declaración
  imports: [
    CommonModule,
    FormsModule, // ✅ Necesario para formularios
    ReactiveFormsModule, // ✅ Para los formularios reactivos
    HttpClientModule
  ],
  exports: [InicioSesionComponent, LoginComponent, RegistroComponent] // ✅ Exportarlo si se usa en otro módulo
})
export class UsuariosModule { }
