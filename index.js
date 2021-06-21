const express = require('express')
const app = express()
const port = 3000
var db_config  = require('./config/db.json');
const bodyParser = require("body-parser")
const { User } = require("./models/User")

const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://${db_config.user}:${db_config.password}@${db_config.host}/${db_config.database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err))

app.get('/', (req, res) => { res.send('Hello World!') })

app.post('/register', (req, res) => {
    const user = User
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})