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
var contact_service_1 = require('./contact.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var NewContactComponent = (function () {
    function NewContactComponent(contactService, router, routeParams) {
        this.contactService = contactService;
        this.router = router;
        this.routeParams = routeParams;
    }
    // onAddCreate(firstName,lastName,phone,email){
    //     let contact={firstName:firstName,lastName:lastName,contactNo:phone,email:email};
    //     this.contactService.insertContact(contact);
    //     this.router.navigate(['Contacts']);
    // }
    NewContactComponent.prototype.onSubmit = function () {
        this.contactService.insertContact(this.newContact);
        this.router.navigate(['Contacts']);
    };
    NewContactComponent.prototype.ngOnInit = function () {
        //this.passedLastName=this.routeParams.get("lastName");
        this.newContact = { firstName: "", lastName: this.routeParams.get("lastName"), contactNo: "", email: "" };
    };
    NewContactComponent = __decorate([
        core_1.Component({
            template: "\n           <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <div>\n                <label for=\"first-name\">First Name:</label>\n                <input type=\"text\" id=\"first-name\"\n                ngControl=\"first-Name\"\n                [(ngModel)]=\"newContact.firstName\"\n                required\n                #firstName=\"ngForm\"\n                />\n                <span *ngIf=\"!firstName.valid\">Not Valid</span>\n            </div>\n             <div>\n                <label for=\"last-name\">Last Name:</label>\n                <input  type=\"text\" id=\"last-name\"\n                ngControl=\"last-Name\"\n                [(ngModel)]=\"newContact.lastName\"\n                required\n                />\n            </div>\n            <div>\n                <label for=\"phone\">Contact No:</label>\n                <input  type=\"text\" id=\"phone\"\n                ngControl=\"phone\"\n                [(ngModel)]=\"newContact.contactNo\"\n                required\n                />\n            </div>\n            <div>\n                <label for=\"email\">EmailId:</label>\n                <input  type=\"text\" id=\"email\"\n                ngControl=\"email\"\n                [(ngModel)]=\"newContact.email\"\n                required\n                />\n            </div>           \n            <button type=\"submit\" [disabled]=\"!myForm.form.valid\">Create New Contact</button>\n   </form>\n    ",
            providers: [contact_service_1.ContactService],
            styles: ["\n        label{\n            display:inline-block;\n            width:140px;\n        }\n        input{\n            width:250px;\n        }\n        .ng-invalid{\n            border:1px solid red;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], NewContactComponent);
    return NewContactComponent;
}());
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=new-contact.component.js.map