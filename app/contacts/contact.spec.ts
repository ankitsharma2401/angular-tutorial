import { Contact } from './contact';
describe('Contact', () => {
  it('has name', () => {
    let contact: Contact = {firstName: 'Ankit', lastName: 'Sharma',contactNo:'9999999999',email:'a@gmail.com'};
    expect(contact.firstName).toEqual('Ankit');
  });
  it('has id', () => {
    let contact: Contact = {firstName: 'Ankit', lastName: 'Sharma',contactNo:'9999999999',email:'a@gmail.com'};
    expect(contact.lastName).toEqual('Sharma');
  });
});