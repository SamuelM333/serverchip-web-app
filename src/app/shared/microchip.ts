

import { User } from './user';

export class Microchip {

    _id: string;
    _etag: string;
    name: string;
    owner: User;
    description: string;
    ip: string;
    tasks: number;

    constructor(name: string, owner: User,  ip: string, description?: string, _id?: string, _etag?: string) {
        this._id = _id;
        this._etag = _etag;
        this.name = name;
        this.owner = owner;
        this.description = description;
        this.ip = ip;
    }
}
