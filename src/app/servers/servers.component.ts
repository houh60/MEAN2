import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    secretPassword = 'tuna';
    showDetails = false;
    logs: number[] = [];
    click = 1;

    constructor() {
    }

    ngOnInit(): void {
    }

    onShowDetails() {
        this.showDetails = !this.showDetails;
        this.logs.push(this.click);
        this.click++;
    }
}
