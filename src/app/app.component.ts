import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { //

    serverElements: any[] = [];
    newServerName = '';
    newServerContent = '';
    evenNums: any[] = [];
    oddNums: any[] = [];

    onServerAdded(event: any) {
        this.serverElements.push(event);
    }

    onDestroyFirst() {
        this.serverElements.splice(0, 1);
    }

    onNumChanged(e: any) {
        console.log('e: ', e);
        if(e % 2 == 0) {
            this.evenNums.push(e);
        } else {
            this.oddNums.push(e);
        }
    }

    clearUp() {
        this.evenNums = [];
        this.oddNums = [];
    }
}
