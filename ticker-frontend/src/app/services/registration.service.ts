import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, Subscriber } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  baseUrl = 'http://mrtbit.com:8080';
  path = 'users/register';

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(
      `${this.baseUrl}/${this.path}`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'username': username,
          'password': password,
        })
      }
    );
  }
}
