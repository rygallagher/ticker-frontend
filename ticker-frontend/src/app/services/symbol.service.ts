import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AbstractService } from "./abstract.service";

@Injectable({
    providedIn: 'root'
})
export class SymbolService extends AbstractService{
    path = 'symbols';
}