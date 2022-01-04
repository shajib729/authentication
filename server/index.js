const cookieSession = require('cookie-session')
const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
require("./passport")
const authRoute= require("./routes/auth")
const cors=require("cors")
const passport = require("passport");

app.use(cookieSession({ name: "session", keys: ["Shajib"] }))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.use("/auth",authRoute)

app.listen(port,()=>console.log(`Server is listening at http://localhost:${port}`))