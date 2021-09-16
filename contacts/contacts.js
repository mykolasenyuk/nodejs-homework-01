const { listContacts } = require('./listContact')
const { getContactById } = require('./getContactById')
const { removeContact } = require('./removeContact')
const { addContact } = require('./addContact')

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
