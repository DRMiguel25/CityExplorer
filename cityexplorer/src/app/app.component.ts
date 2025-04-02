import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { HomeComponent } from "./homee/home.component";
//import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cityexplorer';
}
