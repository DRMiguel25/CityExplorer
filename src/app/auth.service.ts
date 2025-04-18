import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private idUsuario: number = 0;

  constructor() {
    const id = localStorage.getItem('id_usuario');
    this.idUsuario = id ? Number(id) : 0;
  }

  getToken(): string | null {
    const token = localStorage.getItem('access_token');
    console.log('🔐 Token obtenido desde localStorage:', token);
    return token;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const isAuth = !!token;
    console.log('🧠 ¿Está autenticado?', isAuth);
    return isAuth;
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_usuario');
    this.idUsuario = 0;
    console.log('🚪 Token e ID eliminados, sesión cerrada.');
  }

  setIdUsuario(id: number): void {
    this.idUsuario = id;
    localStorage.setItem('id_usuario', id.toString());
  }

  getIdUsuario(): number {
    return this.idUsuario;
  }

  clear(): void {
    this.idUsuario = 0;
    localStorage.removeItem('id_usuario');
  }
}
