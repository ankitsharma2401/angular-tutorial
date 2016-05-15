"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var contact_service_1 = require('./contacts/contact.service');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, contact_service_1.ContactService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map