import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract.service";

@Injectable({
    providedIn: 'root'
})
export class UserSymbolService extends AbstractService{
    path = 'users/symbols';
}