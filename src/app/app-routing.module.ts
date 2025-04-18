import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'vistas',
    loadChildren: () => import('./vistas/vistas.module').then(m => m.VistasModule),
    canActivate: [AuthGuard]  // ✅ Protegido
  },
  {
    path: '', // 👈 Este es el módulo de usuarios: login, registro, etc.
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
    // ❌ SIN AuthGuard, porque aquí se puede entrar sin estar logueado
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
