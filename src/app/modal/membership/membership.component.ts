import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-membership-component',
    templateUrl: 'membership.html',
    styleUrls: ['../../app.component.scss']
})
export class MembershipComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    navigate(url) {
        window.open(url);
    }
}
