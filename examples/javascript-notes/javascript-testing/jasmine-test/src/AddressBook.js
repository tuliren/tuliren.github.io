function AddressBook() {
  this.contacts = [];
  this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
  const self = this;

  setTimeout(function() {
    // fake asynchronous API call
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3)
};

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.deleteContact = function(index) {
  this.contacts.splice(index, 1);
};

AddressBook.prototype.getContact = function(index) {
  return this.contacts[index];
};
