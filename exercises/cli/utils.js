const fs = require("fs");
const path = require("path");

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, "./contacts.json");

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  let contactsString = fs.readFileSync(contactsLocation);
  let contacts = JSON.parse(contactsString);
  return contacts;
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = contacts => {
  let contactsString = JSON.stringify(contacts, null, 2);
  fs.writeFileSync(contactsLocation, contactsString);
};

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
};
