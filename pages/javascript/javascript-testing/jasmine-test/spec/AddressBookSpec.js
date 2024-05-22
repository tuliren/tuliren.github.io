describe('Address Book', function() {
  let addressBook,
      thisContact;

  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', function() {
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function() {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

describe('Async Address Book', function() {
  const addressBook = new AddressBook();

  beforeEach(function(done) {
    addressBook.getInitialContacts(function() {
      // signal to the testing framework that the
      // asynchronous function is done doing what
      // it needs to do, and can continue testing
      done();
    });
  });

  it('should grab initial contacts', function(done) {
    expect(addressBook.initialComplete).toBe(true);
    // signal to the testing framework that this test
    // reply upon the asynchronous execution
    done();
  })
});
