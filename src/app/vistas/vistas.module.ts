import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Agregar
import { HttpClientModule } from '@angular/common/http'; // ✅ Necesario para peticiones HTTP

import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent], // ✅ Declaración
  imports: [
    CommonModule,
    FormsModule, // ✅ Necesario para formularios
    ReactiveFormsModule, // ✅ Para los formularios reactivos
    HttpClientModule
  ],
  exports: [HomeComponent] // ✅ Exportarlo si se usa en otro módulo
})
export class UsuariosModule { }
