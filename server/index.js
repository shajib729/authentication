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
    origin: "https://shajib-auth.herokuapp.com/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,"my-app/build/")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,"my-app",'build','index.html'))
    })
}

app.use("/auth",authRoute)

app.listen(port,()=>console.log(`Server is listening at http://localhost:${port}`))