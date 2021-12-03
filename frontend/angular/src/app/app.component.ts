import { Component, OnInit } from '@angular/core'
import { APIService } from './api.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular'

    constructor(private api: APIService) {}

    ngOnInit() {
        this.api.socket.on('welcome').subscribe(response => {
            console.log('Backend response', response)
        })

        this.api.socket.emit('welcome')
    }

}
