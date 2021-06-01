interface INewSymbol {
    symbolId: string;
    amount: string;
}

export class NewSymbol {
    public symbolId: string;
    public amount: string;

    constructor();
    constructor(object: INewSymbol)
    constructor(object?: any) {
        this.symbolId = object && object.symbolId || null;
        this.amount = object && object.amount || null;
    }
}