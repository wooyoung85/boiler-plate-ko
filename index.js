const express = require('express')
const app = express()
const port = 3000
var db_config  = require('./config/db.json');
const { User } = require("./models/User")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

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
    const user = new User(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})