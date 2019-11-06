import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-belastingdienst-component',
    templateUrl: 'belastingdienst.html',
    styleUrls: ['../../app.component.scss']
})
export class BelastingdienstComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    navigate(url) {
        window.open(url);
    }
}
