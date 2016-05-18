"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var data_service_1 = require('./data.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, data_service_1.DataService]);
//# sourceMappingURL=boot.js.map