"use strict";
describe('Contact', function () {
    it('has name', function () {
        var contact = { firstName: 'Ankit', lastName: 'Sharma', contactNo: '9999999999', email: 'a@gmail.com' };
        expect(contact.firstName).toEqual('Ankit');
    });
    it('has id', function () {
        var contact = { firstName: 'Ankit', lastName: 'Sharma', contactNo: '9999999999', email: 'a@gmail.com' };
        expect(contact.lastName).toEqual('Sharma');
    });
});
//# sourceMappingURL=contact.spec.js.map