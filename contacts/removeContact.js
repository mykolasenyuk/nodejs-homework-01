const { getContacts, updateContacts } = require('./getContacts')

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
module.exports = {
  removeContact,
}
