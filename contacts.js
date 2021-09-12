const { write, writeFile } = require('fs')
const fs = require('fs/promises')
const path = require('path')
const { v4 } = require('uuid')

const contactsPath = path.join(__dirname, './db/contacts.json')

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

const listContacts = async () => {
  try {
    const contacts = await getContacts()
    console.table(contacts)
  } catch (error) {
    console.log(error)
  }
}

const getContactById = async (id) => {
  try {
    const contacts = await getContacts()
    const contact = contacts.find((cont) => String(cont.id) === String(id))

    if (!contact) {
      console.log(` ⛔️ Contact with ID:${id} did't finded`)
      return
    }

    console.table(contact)
  } catch (error) {
    console.log(error.message)
  }
}

const removeContact = async (id) => {
  try {
    const contacts = await getContacts()

    const idx = contacts.findIndex((cont) => String(cont.id) === String(id))
    if (idx === -1) {
      console.log(` ⛔️ Contact with ID:${id} did't finded`)
      return
    }
    const contact = contacts.find((item) => String(item.id) === String(id))
    console.table(contact)
    console.log(` Removing ${contact.name} from Phoneboook`)
    contacts.splice(idx, 1)
    await updateContacts(contacts)
    console.table(contacts)
    console.log(`✔️ Contact deleted. `)
  } catch (error) {
    console.log(error)
  }
}

const addContact = async (name, email, phone) => {
  try {
    const contacts = await getContacts()
    const id = v4()
    const newContact = { id, name, email, phone }
    console.log(`Processing...`)
    contacts.push(newContact)
    await updateContacts(contacts)
    console.table(contacts)
    console.log(` ✔️  ${newContact.name} added to Phonebook`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
// console.table(data)
