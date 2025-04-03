import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';  // Mantén el guard si lo necesitas
import { InicioSesionComponent } from './usuarios/components/inicio-sesion/inicio-sesion.component';
import { LoginComponent } from './usuarios/components/login/login.component';
import { RegistroComponent } from './usuarios/components/registro/registro.component';
import { HomeComponent } from './vistas/components/home/home.component'; // Asegúrate de importar el componente Home
import { CategoriasComponent } from './vistas/components/categorias/categorias.component'; // Asegúrate de importar el componente Home

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    // Aquí puedes quitar el authGuard, ya que el login debe ser accesible sin autenticación
  },
  {
    path: 'inicio-sesion', component: InicioSesionComponent
  },
  {
    path: 'registro', component: RegistroComponent,
    // Si deseas que la página de registro no esté restringida, elimina el guard aquí también
  },
  {
    path: 'app-home', component: HomeComponent,
    // Si deseas que la página de registro no esté restringida, elimina el guard aquí también
  },
  {
    path: 'categorias', component: CategoriasComponent
  },
  {
    path: '**', redirectTo: 'login'  // Redirige cualquier ruta no definida a 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
