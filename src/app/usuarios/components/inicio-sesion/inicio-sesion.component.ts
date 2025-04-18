import { LocalstorageService } from '../../../localstorage.service';
import { HttpLaravelService } from "../../../http.service";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  standalone: false,
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent {
  InicioSesionFormulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: HttpLaravelService,
    private router: Router,
    private localStorage: LocalstorageService
  ) {
    this.InicioSesionFormulario = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    // Solo limpiar si no hay sesión activa
    if (!this.localStorage.getItem('accessToken')) {
      this.localStorage.clean();
    }
  }

  onLoggedin() {
    if (this.InicioSesionFormulario.invalid) {
      this.InicioSesionFormulario.markAllAsTouched();
      return;
    }

    console.log(this.InicioSesionFormulario.value);
    
    this.service.Service_Post('user', 'login', this.InicioSesionFormulario.value).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.estatus) {
          // ✅ Guardar token correctamente
          console.log('👉 Token recibido del backend:', data.access_token);
          localStorage.setItem('access_token', data.access_token);
          console.log('✅ access_token guardado en localStorage');

          // 🚀 Redirigir después del login exitoso
          const userId = data.data?.id_usuario;

          if (userId != null) {
            // 🚀 Redirigir con el ID del usuario como parámetro
            console.log('👉 ID de usuario recibido:', userId);
            this.router.navigate(['/home-anunciante', userId]);
          } else {
            console.warn('⚠️ No se recibió el ID del usuario en la respuesta');
          }
        }
        else {
          Swal.fire({
            icon: "error",
            title: "Error en el inicio de sesión",
            text: data.mensaje || "Credenciales incorrectas",
            showConfirmButton: true,
          });
        }
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error de conexión",
          text: "No se pudo conectar con el servidor",
          showConfirmButton: true,
        });
      }
    });    
  }

  isValid(field: string): boolean {
    return !!this.InicioSesionFormulario.get(field)?.invalid && !!this.InicioSesionFormulario.get(field)?.touched;
  }

  get f() {
    return this.InicioSesionFormulario.controls;
  }

  limpiarFormulario() {
    this.InicioSesionFormulario.reset({ correo: '', password: '' });
  }

  login() {
    console.log('inicio');
    this.router.navigate(['/login']);  // Redirige a la ruta de inicio-sesion
  }


}
