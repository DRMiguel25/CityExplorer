import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpLaravelService } from '../../../http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'vista-detallada-anuncio',
  standalone: false,
  templateUrl: './vista-detallada-anuncio.component.html',
  styleUrls: ['./vista-detallada-anuncio.component.scss']
})
export class VistaDetalladaAnuncioComponent implements OnInit {
  lugar: any; // Aquí guardaremos los datos del lugar
  direccion: any; // Aquí guardamos los datos de la dirección
  isLoading = true;

  private categoriaMap: { [key: string]: number } = {
    'restaurantes': 1,
    'parques': 2,
    'iglesias': 3,
    'mercados': 6,
    'supermercados': 7,
    'plaza': 4,
    'tiendas': 8,
    'antros': 5,
    'gourmet_urbano': 9
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpLaravelService: HttpLaravelService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerLugar(+id);
    }
  }

  obtenerLugar(id: number): void {
    this.httpLaravelService.Service_Get(`lugar/${id}`, '').subscribe(
      (data) => {
        this.lugar = data;
        this.isLoading = false;
        console.log('Lugar cargado:', this.lugar);
        this.obtenerDireccion(this.lugar.id_direccion); // Aquí llamamos a obtenerDirección con el id_direccion
      },
      (error) => {
        console.error('Error al cargar el lugar:', error);
        this.isLoading = false;
      }
    );
  }

  obtenerDireccion(idDireccion: number): void {
    this.httpLaravelService.Service_Get(`direccion/${idDireccion}`, '').subscribe(
      (data) => {
        this.direccion = data;
        console.log('Dirección cargada:', this.direccion);
      },
      (error) => {
        console.error('Error al cargar la dirección:', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/home-anunciante']);
  }

  // Método para obtener el nombre de la categoría basado en el ID
  obtenerCategoriaNombre(idCategoria: number): string {
    for (const categoria in this.categoriaMap) {
      if (this.categoriaMap[categoria] === idCategoria) {
        return categoria.charAt(0).toUpperCase() + categoria.slice(1).replace('_', ' '); // Capitaliza la primera letra y reemplaza _ por espacios
      }
    }
    return 'Categoría desconocida'; // Si no encuentra la categoría, muestra este texto
  }

  modificarAnuncio(): void {
    if (this.lugar && this.lugar.id_lugar) {
      console.log('modificar anuncio con el id: ', this.lugar.id_lugar, '...');
      this.router.navigate(['/crear-actualizar-anuncio', this.lugar.id_lugar]);
    } else {
      console.error('El objeto lugar no está disponible o no tiene un id válido.');
    }
  }

  eliminarAnuncio(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el anuncio permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed && this.lugar?.id_lugar) {
        this.httpLaravelService.Service_Delete('lugar', this.lugar.id_lugar).subscribe({
          next: () => {
            Swal.fire('¡Eliminado!', 'El anuncio ha sido eliminado.', 'success').then(() => {
              this.router.navigate(['/home-anunciante']); // Redirige después de eliminar
            });
          },
          error: (error) => {
            console.error('Error al eliminar el lugar:', error);
            Swal.fire('Error', 'No se pudo eliminar el anuncio.', 'error');
          }
        });
      }
    });
  }
  
  confirmarPago(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres proceder con el pago del anuncio?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, pagar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Función no disponible',
          text: 'Esta función no está disponible en esta versión. Se agregará en una futura versión.',
          icon: 'info',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#3085d6'
        });
      }
    });
  }
  
}
