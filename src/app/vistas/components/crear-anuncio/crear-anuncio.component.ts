import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpLaravelService } from "../../../http.service";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'crear-anuncio',
  standalone: false,
  templateUrl: './crear-anuncio.component.html',
  styleUrls: ['./crear-anuncio.component.scss']
})
export class CrearAnuncioComponent {
  anuncioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: HttpLaravelService
  ) {
    this.anuncioForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      paginaWeb: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/.*)?$/)]],
      num_telefonico: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      horario_apertura: ['', Validators.required],
      horario_cierre: ['', Validators.required],
      dias_servicio: ['', Validators.required],
      categoria: ['', Validators.required],
      direccion: this.fb.group({
        calle: ['', Validators.required],
        numero_ext: ['', Validators.required],
        numero_int: ['', Validators.required],
        colonia: ['', Validators.required],
        codigo_postal: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      }),
      url: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/.*)?$/)]],
    });
  }

  // Método para enviar los datos del formulario
  crearAnuncio(): void {
    if (this.anuncioForm.invalid) {
      this.anuncioForm.markAllAsTouched();
      return;
    }

    const formData = this.anuncioForm.value;
    console.log('Enviando datos al backend:', formData);

    // Utilizamos el servicio HttpLaravelService para realizar la petición
    this.service.Service_Post('lugar', 'con-direccion', formData).subscribe({
      next: (data: any) => {
        if (data.estatus) {
          Swal.fire('¡Éxito!', 'Lugar creado con éxito', 'success');
          this.router.navigate(['/home-anunciante']); // Redirigir después de crear
        } else {
          Swal.fire('Error', data.mensaje || 'No se pudo crear el lugar', 'error');
        }
      },
      error: (err) => {
        console.error('Error al crear el lugar:', err);
        Swal.fire('Error', 'Ocurrió un error en la conexión con el servidor', 'error');
      }
    });
  }

  // Método para comprobar si un campo es inválido y fue tocado
  isInvalid(controlPath: string): boolean {
    const control = this.anuncioForm.get(controlPath);
    return !!(control && control.touched && control.invalid);
  }
}
