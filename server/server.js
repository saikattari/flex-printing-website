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

/* DATABASE CONNECTION */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected")

  app.listen(process.env.PORT || 5000, () => {

    console.log("Server running on port 5000")

  })

})

.catch((error) => {

  console.log(error)

})