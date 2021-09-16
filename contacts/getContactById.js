const { getContacts } = require('./getContacts')

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
module.exports = {
  getContactById,
}
