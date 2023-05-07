import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private HttpClient: HttpClient - inyecto el HttpClient 
  constructor(private httpClient: HttpClient) { }


  public registrarUsuario(user:any):Observable<Object> {
    return this.httpClient.post(`${baserUrl}/usuarios/`,user);
  }

 /*

   private baseURL = "http://localhost:8088/api/v1/usuarios";


 registrarUsuario(usuario:Usuario) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,usuario);
  }
 */

}
