import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {

    num = 0;
    @Output() numChanged = new EventEmitter();
    @Output() clearUpEverything = new EventEmitter();
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

    onPauseGame() {
        this.clearIntervals();
    }

    clearIntervals() {
        for(let interval of this.allIntervals) {
            clearInterval(interval);
        }
    }

    terminateGame() {
        this.num = 0;
        this.clearIntervals();
        this.clearUpEverything.emit();
    }

    ngOnDestroy(): void {
        this.clearIntervals();
    }
}
