import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'categorias',
  standalone: false,
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  constructor(private router: Router) {}

  vistaCategorias(categorias: string) {
    console.log('Categoría seleccionada:', categorias);
    this.router.navigate(['/categoria-vista', categorias]);

  }
}
