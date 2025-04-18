// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

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
    console.log('🚪 Token eliminado, sesión cerrada.');
  }
}
