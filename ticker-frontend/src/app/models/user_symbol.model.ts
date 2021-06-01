import { Symbol } from './symbol.model';

interface IUserSymbol {
    userId: string;
    symbolId: string;
    createdAt: Date;
    updatedAt: Date;
    amount: number;
    symbol: Symbol;
}

export class UserSymbol {
    public userId: string;
    public symbolId: string;
    public createdAt: Date;
    public updatedAt: Date;
    public amount: number;
    public symbol: Symbol;

    constructor();
    constructor(object: IUserSymbol)
    constructor(object?: any) {
        this.userId = object && object.userId || null;
        this.symbolId = object && object.symbolId || null;
        this.createdAt = object && object.createdAt || null;
        this.updatedAt = object && object.updatedAt || null;
        this.amount = object && object.amount || null;
        this.symbol = object && object.symbol || null;
    }
}