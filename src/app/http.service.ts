import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpLaravelService {
  private _url = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) {}

  Service_Get(Modelo: string, Dato: string | number){
    return this.http.get(`${this._url}/${Modelo}/${Dato}`);
  }

  Service_Get_Paginator(Modelo: string, Dato: string | number, page: number, rows: number){
    return this.http.get(`${this._url}/${Modelo}/${Dato}?page=${page}&rows=${rows}`);
  }

  Service_Post(Modelo: string, Dato: string | number, Parametros: any){
    console.log(`${this._url}/${Modelo}/${Dato}`, Parametros);
    return this.http.post(`${this._url}/${Modelo}/${Dato}`, Parametros);
  }

  Service_Patch(Modelo: string, Dato: string | number, Parametros: any){
    return this.http.patch(`${this._url}/${Modelo}/${Dato}`, Parametros);
  }

  Service_Delete(Modelo: string, Dato: string | number){
    return this.http.delete(`${this._url}/${Modelo}/${Dato}`);
  }
}