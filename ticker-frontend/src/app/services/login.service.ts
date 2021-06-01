import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:8080';
  path = 'users/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/${this.path}`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'username': username,
          'password': password,
        })
      }
    );
  }
}