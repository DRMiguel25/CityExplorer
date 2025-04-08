import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-anunciante',
  standalone: false,
  templateUrl: './home-anunciante.component.html',
  styleUrl: './home-anunciante.component.scss'
})
export class HomeAnuncianteComponent {
  constructor(private router: Router) {}
  
  crearAnuncio() {
    console.log('Crear anuncio...');
    this.router.navigate(['/crear-anuncio']);
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}
