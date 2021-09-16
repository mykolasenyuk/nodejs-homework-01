const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, '../db/contacts.json')

const getContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    return contacts
  } catch (error) {
    console.log(error)
  }
}
const updateContacts = async (newContactsList) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContactsList))
}

module.exports = {
  getContacts,
  updateContacts,
}
