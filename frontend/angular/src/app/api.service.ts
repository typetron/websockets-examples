import { Injectable } from '@angular/core'
import { Websocket } from '@typetron/websockets'

@Injectable({
    providedIn: 'root'
})
export class APIService {

    socket = new Websocket('ws://localhost:8001')

    constructor() { }
}
