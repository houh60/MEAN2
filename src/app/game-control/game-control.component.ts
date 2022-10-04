import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

    num = 0;
    @Output() numChanged = new EventEmitter();
    allIntervals: any[] = [];
    constructor() {}

    ngOnInit(): void {
    }

    onStartGame() {
        const interval = setInterval(() => {
            this.numChanged.emit(this.num++);
        }, 1000);
        this.allIntervals.push(interval);
    }

    onStopGame() {
        for(let interval of this.allIntervals) {
            clearInterval(interval);
        }
    }
}
