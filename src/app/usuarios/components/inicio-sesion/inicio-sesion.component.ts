import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: false,
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent {

  constructor(private router: Router) {}

  login() {
    console.log('inicio');
    this.router.navigate(['/login']);  // Redirige a la ruta de inicio-sesion
  }

  homeScreen() {
    console.log('Navegar como invitado');
    this.router.navigate(['/app-home']);  // Redirige a la ruta de home
    // Aquí puedes manejar la navegación como invitado si lo deseas
  }
}