import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { UserSymbolService } from "src/app/services/user_symbol.service";
import { Symbol } from "src/app/models/symbol.model";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    
    subscription!: Subscription;
    symbols: Symbol[] = [];

    constructor(
        private _userSymbolService: UserSymbolService,
    ) {}
    
    ngOnInit(): void {
        const source = interval(3000);
        this._getInitialSymbols();
        this.subscription = source.subscribe(_ => this._getUserSymbols());
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private _getInitialSymbols(): void {
        //This is to make sure the carousel appears initially
        this._userSymbolService.getAll([], new Map()).subscribe(
            userSymbols => {
                this.symbols = userSymbols.map(x => x.symbol);
            }, 
            _ => {}
        )
    }

    private _getUserSymbols(): void {
        this._userSymbolService.getAll([], new Map()).subscribe(
            userSymbols => {
                this._updateAndAddSymbols(userSymbols.map(x => x.symbol));
            }
        )
    }

    private _updateAndAddSymbols(symbols: Symbol[]): void {
        //We want to update fields of each symbol without wiping the list
        //Add any previously untracked symbols
        symbols.forEach(symbol => {
            var matchingSymbols = this.symbols.filter(x => x.id == symbol.id);

            if (matchingSymbols.length > 0) {
                var symbolToUpdate = matchingSymbols[0];
                symbolToUpdate.price = symbol.price;
                symbolToUpdate.lastPrice = symbol.lastPrice;
            } 
            else {
                this.symbols.push(symbol);
            }
        })
    }

    deleteUserSymbol(symbol: Symbol): void {
        this._userSymbolService.delete([symbol.id]);
    }

    getPriceClass(symbol: Symbol): string {
        if (symbol.price > symbol.lastPrice) {
            return 'success';
        } else if (symbol.price < symbol.lastPrice) {
            return 'error';
        }

        return '';
    }
}