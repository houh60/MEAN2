import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {//

    serverElements: any[] = [];
    newServerName = '';
    newServerContent = '';
    evenNums: any[] = [];
    oddNums: any[] = [];

    numbers = [1, 2, 3, 4, 5, 6];
    onlyOdd = false;

    ngOnInit(): void {
        for(let num of this.numbers) {
            if(num % 2 == 0) {
                this.evenNums.push(num);
            } else {
                this.oddNums.push(num);
            }
        }
    }

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
