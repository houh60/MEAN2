import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    serverElement: any;
    newServerName = '';
    newServerContent = '';
    @Output() serverAdded = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
    }

    onAddServer() {
        this.serverElement = {
            type: 'server',
            name: this.newServerName,
            content: this.newServerContent
        };
        this.serverAdded.emit(this.serverElement);
    }

    onAddBlueprint() {
        this.serverElement = {
            type: 'blueprint',
            name: this.newServerName,
            content: this.newServerContent
        };
        this.serverAdded.emit(this.serverElement);
    }
}
