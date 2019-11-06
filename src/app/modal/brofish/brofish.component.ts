import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-brofish-component',
    templateUrl: 'brofish.html',
    styleUrls: ['../../app.component.scss']
})
export class BrofishComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    navigate(url) {
        window.open(url);
    }
}
