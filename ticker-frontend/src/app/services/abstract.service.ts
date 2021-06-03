import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export abstract class AbstractService {
    
    baseUrl = 'https://mrtbit.com:8080';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',            
        })
    };

    path!: string;

    post(pathSegments: any[], model: any): Observable<any> {
        var pathSegmentString = this._buildPathSegments(pathSegments);

        return this.http.post<any>(
            `${this.baseUrl}/${this.path}${pathSegmentString}`,
            JSON.stringify(model),
            this.httpOptions,
        );
    }

    put(pathSegments: string[], body: any): Observable<any> {
        var pathSegmentString = this._buildPathSegments(pathSegments);

        return this.http.put<string>(
            `${this.baseUrl}/${this.path}${pathSegmentString}`,
            JSON.stringify(body),
            this.httpOptions,
          );
    }

    get(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        var pathSegmentString = this._buildPathSegments(pathSegments);
        var queryParameterString = this._buildQueryParameters(queryParameters);
        
        return this.http.get<any>(
            `${this.baseUrl}/${this.path}${pathSegmentString}${queryParameterString}`,
            this.httpOptions,
        );
      }

    getAll(pathSegments: any[], queryParameters: Map<string, any>): Observable<any[]> {
        var pathSegmentString = this._buildPathSegments(pathSegments);
        var queryParameterString = this._buildQueryParameters(queryParameters);

        return this.http.get<any[]>(
            `${this.baseUrl}/${this.path}${pathSegmentString}${queryParameterString}`,
            this.httpOptions,
        );
    }

    delete(pathSegments: any[]): Observable<any> {
        var pathSegmentString = this._buildPathSegments(pathSegments);

        return this.http.delete<any>(
            `${this.baseUrl}/${this.path}${pathSegmentString}`,
            this.httpOptions,
        );
    }

    private _buildPathSegments(pathSegments: string[]): string {
        return pathSegments != null && pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '';
    }

    private _buildQueryParameters(queryParameters: Map<string, any>): string {
        return queryParameters != null && queryParameters.size > 0 ? `?${Array.from(queryParameters.keys()).map(key => key + '=' + queryParameters.get(key)).join('&')}` : '';
    }
}