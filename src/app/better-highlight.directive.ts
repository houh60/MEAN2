import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor?: string;
    @HostBinding('style.color') color?: string;

    constructor() {}

    ngOnInit(): void {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseOver(event: Event) {
        this.color = 'white';
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseLeave(event: Event) {
        this.color = 'black';
        this.backgroundColor = this.defaultColor;
    }
}
