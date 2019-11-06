import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkme-component',
    templateUrl: 'checkme.html',
    styleUrls: ['../../app.component.scss']
})
export class CheckmeComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    navigate(url) {
        window.open(url);
    }
}
