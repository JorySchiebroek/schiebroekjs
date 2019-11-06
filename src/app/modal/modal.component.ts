import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal-component',
    templateUrl: 'modal.html',
    styleUrls: ['../app.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() public project: any;
    @Input() public showModal: boolean;
    @Output() closeModal: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    close() {
        this.showModal = false;
        this.closeModal.emit();
    }
}
