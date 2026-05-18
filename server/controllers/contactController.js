const Contact = require("../models/Contact")

const transporter = require("../config/mailConfig")

/* SAVE CONTACT */

const saveContact = async (req, res) => {

  try {

    const contact = new Contact(req.body)

    await contact.save()

    /* OWNER EMAIL */

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New Contact Message",

      html: `

        <h2>New Customer Message</h2>

        <p><b>Name:</b> ${req.body.name}</p>

        <p><b>Email:</b> ${req.body.email}</p>

        <p><b>Phone:</b> ${req.body.phone}</p>

        <p><b>Message:</b> ${req.body.message}</p>

      `

    })

    /* CUSTOMER EMAIL */

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: req.body.email,

      subject: "Thank You For Contacting Us",

      html: `

        <h2>Flex Print</h2>

        <p>Hi ${req.body.name},</p>

        <p>Thank you for contacting us.</p>

        <p>We will contact you soon.</p>

      `

    })

    res.status(201).json({

      success: true,

      message: "Message Sent Successfully"

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      success: false,

      message: "Server Error"

    })

  }

}

/* GET CONTACTS */

const getContacts = async (req, res) => {

  try {

    const contacts = await Contact.find().sort({

      createdAt: -1

    })

    res.status(200).json({

      success: true,

      contacts

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      success: false,

      message: "Server Error"

    })

  }

}

module.exports = {

  saveContact,

  getContacts

}