import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    serverElements: any[] = [];
    newServerName = '';
    newServerContent = '';

    onServerAdded(event: any) {
        this.serverElements.push(event);
    }
}
