import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const routes: Routes = [
  {
    path: 'app-home', component: HomeComponent
  },
  {
    path: 'categorias', component: CategoriasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
