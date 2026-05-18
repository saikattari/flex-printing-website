const express = require("express")

const router = express.Router()

const {

  saveContact,

  getContacts

} = require("../controllers/contactController")

/* SAVE CONTACT */

router.post("/contact", saveContact)

/* GET CONTACTS */

router.get("/contacts", getContacts)

module.exports = router