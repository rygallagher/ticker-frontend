import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { UserSymbolService } from "src/app/services/user_symbol.service";
import { UserSymbol } from "src/app/models/user_symbol.model";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    
    subscription!: Subscription;
    userSymbols: UserSymbol[] = [];

    constructor(
        private _userSymbolService: UserSymbolService,
    ) {}
    
    ngOnInit(): void {
        const source = interval(1000);
        this.subscription = source.subscribe(_ => this.getUserSymbols());
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getUserSymbols(): void {
        this._userSymbolService.getAll([], new Map()).subscribe(
            userSymbols => {
                this.userSymbols = userSymbols;
            }, 
            _ => {}
        )
    }
}