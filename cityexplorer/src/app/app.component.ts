import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
//import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";

@Component({
  selector: 'app-root',
  imports: [InicioSesionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cityexplorer';
}
