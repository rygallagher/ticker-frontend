import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Symbol } from "src/app/models/symbol.model";
import { SymbolService } from "src/app/services/symbol.service";
import { UserSymbolService } from "src/app/services/user_symbol.service";

@Component({
    selector: 'symbol-filter',
    templateUrl: './symbol_filter.component.html',
    styleUrls: ['./symbol_filter.component.scss'],
})
export class SymbolFilterComponent {

    symbolFormControl = new FormControl();
    amountFormControl = new FormControl();
    symbols: Symbol[] = [];
    selectedSymbol: any;
    symbolFilter = "";

    constructor(
        private _symbolService: SymbolService,
        private _userSymbolService: UserSymbolService
    ) {
        this.symbolFormControl.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged(),
        ).subscribe(value => {
            this.symbolFilter = value;
            if (value.length >= 3) {
                this.filterSymbols()
            }            
        });
    }

    filterSymbols(): void {        
        this._symbolService.getAll([], new Map([['search', this.symbolFilter]])).subscribe(symbols => {
            this.symbols = symbols;
        });
    }

    displaySymbol(symbol: Symbol): string {
        return symbol && symbol.symbol ? symbol.symbol : '';
    }

    selectSymbol(symbol: Symbol): void {
        this.selectedSymbol = symbol;
    }

    watchSymbol(): void {
        this._userSymbolService.post([],
            [{
                'symbolId': this.selectedSymbol.id,
                'amount': this.amountFormControl.value != null ? this.amountFormControl.value : null
            }]
        ).subscribe(
            _ => {},
            _ => {}
        )
    }
}