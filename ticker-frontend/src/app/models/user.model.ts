interface IUser {
    id: string;
    username: string;
    token: string;
}

export class User {
    public id: string;
    public username: string;
    public token: string;

    constructor();
    constructor(object: IUser)
    constructor(object?: any) {
        this.id = object && object.id || null;
        this.username = object && object.username || null;
        this.token = object && object.token || null;
    }
}