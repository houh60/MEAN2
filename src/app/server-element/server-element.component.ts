import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() serverElement: any;

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges() called.');
    }

    constructor() {
        console.log('constructor() called.');
    }

    ngDoCheck(): void {
        console.log('ngDoCheck() called.');
    }

    ngOnInit(): void {
        console.log('ngOnInit() called.');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit() called.');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked() called.');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit() called.');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked() called.');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy() called.');
    }
}
