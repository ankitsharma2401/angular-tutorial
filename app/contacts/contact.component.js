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
var router_deprecated_1 = require('@angular/router-deprecated');
var ContactComponent = (function () {
    function ContactComponent(router) {
        this.router = router;
        this.contact = null;
    }
    ContactComponent.prototype.onCreateNew = function () {
        this.router.navigate(['NewContact', { lastName: this.contact.lastName }]);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: "contactSelector",
            template: "\n    \n   <div >\n            <div>\n                <label for=\"first-name\">First Name:</label>\n                <input [(ngModel)]=\"contact.firstName\" type=\"text\" id=\"first-name\"/>\n            </div>\n             <div>\n                <label for=\"last-name\">Last Name:</label>\n                <input [(ngModel)]=\"contact.lastName\" type=\"text\" id=\"last-name\"/>\n            </div>\n            <div>\n                <label for=\"phone\">Contact No:</label>\n                <input [(ngModel)]=\"contact.contactNo\" type=\"text\" id=\"phone\"/>\n            </div>\n            <div>\n                <label for=\"email\">EmailId:</label>\n                <input [(ngModel)]=\"contact.email\" type=\"text\" id=\"email\"/>\n            </div>           \n            <button (click)=\"onCreateNew()\">Create Contact from Here</button>\n   </div>\n \n    ",
            inputs: ["contact"],
            styles: ["\n    label{\n        display:inline-block;\n        width:140px;\n    }\n    input{\n        width:250px;\n    }\n   "]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map