"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var contact_component_1 = require('./contact.component');
var contact_service_1 = require('./contact.service');
var ContactListComponent = (function () {
    function ContactListComponent(contactService) {
        this.contactService = contactService;
        this.showDetails = {};
    }
    ContactListComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactListComponent.prototype.selectContact = function (contact) {
        this.showDetails = contact;
    };
    ContactListComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            template: "\n    <ul>\n        <li *ngFor=\"let contact of contacts\"\n        (click)=\"selectContact(contact)\"\n        [class.clicked]=\"showDetails===contact\"\n        >\n            {{contact.firstName}} {{contact.lastName}}\n        </li>\n    </ul>\n    <contactSelector [contact]=\"showDetails\"></contactSelector>\n    ",
            directives: [contact_component_1.ContactComponent],
            providers: [contact_service_1.ContactService],
            styleUrls: ["./assests/css/contact-list.css"]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map