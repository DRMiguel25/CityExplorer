import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

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