const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const contactRoutes = require("./routes/contactRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()

/* MIDDLEWARE */

app.use(cors())

app.use(express.json())

/* API ROUTES */

app.use("/api", contactRoutes)

app.use("/api/auth", authRoutes)

/* TEST ROUTE */

app.get("/", (req, res) => {

  res.send("Flex Printing Backend Running")

})

/* PORT */

const PORT = process.env.PORT || 5000

/* DATABASE CONNECTION */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected")

  app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`)

  })

})

.catch((error) => {

  console.log(error)

})