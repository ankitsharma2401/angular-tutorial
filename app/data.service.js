"use strict";
var DataService = (function () {
    function DataService() {
        this.data = ['Milk', 'Sugar', 'Bread'];
    }
    DataService.prototype.getRandomData = function () {
        return this.data[Math.floor(Math.random() * this.data.length)];
    };
    DataService.prototype.insertData = function (data) {
        this.data.push(data);
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map