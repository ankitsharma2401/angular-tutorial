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
var core_2 = require('@angular/core');
var jQueryComponent = (function () {
    function jQueryComponent(elRef) {
        this.elRef = elRef;
    }
    jQueryComponent.prototype.ngOnInit = function () {
        jQuery(this.elRef.nativeElement).find('button').on('click', function () {
            alert('It works');
        });
    };
    jQueryComponent = __decorate([
        core_1.Component({
            selector: 'my-jquery',
            template: "\n        <button>Click me</button>\n    "
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef])
    ], jQueryComponent);
    return jQueryComponent;
}());
exports.jQueryComponent = jQueryComponent;
//# sourceMappingURL=jquery.component.js.map