interface ISymbol {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    symbol: string;
    description: string;
    price: number;
    lastPrice: number;
    active: boolean;
}

export class Symbol {
    public id: string;
    public createdAt: Date;
    public updatedAt: Date;
    public symbol: string;
    public description: string;
    public price: number;
    public lastPrice: number;
    public active: boolean;

    constructor();
    constructor(object: ISymbol)
    constructor(object?: any) {
        this.id = object && object.id || null;
        this.createdAt = object && object.createdAt || null;
        this.updatedAt = object && object.updatedAt || null;
        this.symbol = object && object.symbol || null;
        this.description = object && object.description || null;
        this.price = object && object.price || null;
        this.lastPrice = object && object.lastPrice || null;
        this.active = object && object.active || null;
    }
}