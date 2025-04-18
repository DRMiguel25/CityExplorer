import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpLaravelService } from '../../../http.service';
import { Lugar } from '../home-anunciante/lugar.interface';

@Component({
  selector: 'destino-vista',
  standalone: false,
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss']
})
export class DestinosVistaComponent implements OnInit {
  lugares: Lugar[] = [];

  constructor(
    private router: Router,
    private httpLaravelService: HttpLaravelService
  ) {}

  ngOnInit(): void {
    this.httpLaravelService.Service_Get_Lugares_Publico().subscribe({
      next: (data) => {
        // 👈 Cambio hecho aquí: filtramos los lugares activos
        this.lugares = data.filter((lugar: any) => lugar.activo);
        console.log('Lugares activos cargados:', this.lugares);
      },
      error: (err) => {
        console.error('Error al cargar lugares públicos:', err);
      }
    });

  }

  vistaDetalladaDestino(id: number | string) {
    console.log('ID del destino:', id);
    const idEntero = parseInt(id.toString(), 10);

    if (isNaN(idEntero)) {
      console.error('ID inválido:', id);
      return;
    }

    this.router.navigate(['/vista-detallada-destino', idEntero]);
  }
}
