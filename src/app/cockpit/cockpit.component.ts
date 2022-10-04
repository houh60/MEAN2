import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    serverElement: any;
    newServerName = '';
    newServerContent = '';
    @Output() serverOrBluePrintAdded = new EventEmitter();
    @ViewChild('nameInput') nameInput: any;

    constructor() {}

    ngOnInit(): void {
    }

    onAddServer() {
        this.serverElement = {
            type: 'server',
            name: this.nameInput.nativeElement.value,
            content: this.newServerContent
        };
        this.serverOrBluePrintAdded.emit(this.serverElement);
    }

    onAddBlueprint() {
        this.serverElement = {
            type: 'blueprint',
            name: this.nameInput.nativeElement.value,
            content: this.newServerContent
        };
        this.serverOrBluePrintAdded.emit(this.serverElement);
    }
}
