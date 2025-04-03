import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLaravelService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  // Autenticación
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login`, data);
  }
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/register`, data);
  }
  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/logout`, {}, { withCredentials: true });
  }
  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuario/current`, { withCredentials: true });
  }

  // Usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuario`, { withCredentials: true });
  }
  getUsuarioById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuario/${id}`, { withCredentials: true });
  }
  updateUsuario(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/usuario/${id}`, data, { withCredentials: true });
  }
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/usuario/${id}`, { withCredentials: true });
  }

  // Roles
  getRoles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rol`, { withCredentials: true });
  }
  createRol(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/rol`, data, { withCredentials: true });
  }
  getRolById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/rol/${id}`, { withCredentials: true });
  }
  updateRol(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/rol/${id}`, data, { withCredentials: true });
  }
  deleteRol(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/rol/${id}`, { withCredentials: true });
  }

  // Direcciones
  getDirecciones(): Observable<any> {
    return this.http.get(`${this.baseUrl}/direccion`, { withCredentials: true });
  }
  createDireccion(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/direccion`, data, { withCredentials: true });
  }
  getDireccionById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/direccion/${id}`, { withCredentials: true });
  }
  updateDireccion(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/direccion/${id}`, data, { withCredentials: true });
  }
  deleteDireccion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/direccion/${id}`, { withCredentials: true });
  }

  // Lugares
  getLugares(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lugar`, { withCredentials: true });
  }
  createLugar(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/lugar`, data, { withCredentials: true });
  }
  getLugarById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lugar/${id}`, { withCredentials: true });
  }
  updateLugar(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/lugar/${id}`, data, { withCredentials: true });
  }
  deleteLugar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/lugar/${id}`, { withCredentials: true });
  }
}
