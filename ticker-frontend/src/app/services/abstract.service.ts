import { HttpClient, HttpHeaders } from "@angular/common/http";
import { stringify } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export abstract class AbstractService {
    
    baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',            
        })
    };

    path!: string;

    post(model: any): Observable<any> {
        return this.http.post<any>(
            `${this.baseUrl}/${this.path}`,
            JSON.stringify(model),
            this.httpOptions,
        );
    }

    get(id: string): Observable<any> {
        return this.http.get<any>(
            `${this.baseUrl}/${this.path}/${id}`,
            this.httpOptions,
        );
      }

    getAll(map: Map<string, any>): Observable<any[]> {
        var queryParameters = Array.from(map.keys()).map(key => key + '=' + map.get(key)).join('&');

        return this.http.get<any[]>(
            `${this.baseUrl}/${this.path}?${queryParameters}`,
            this.httpOptions,
        );
    }
}