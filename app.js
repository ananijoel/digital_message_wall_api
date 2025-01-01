const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/dataBase/sequelize')
const cors = require('cors')

const {Message} = require('./src/dataBase/sequelize')

const staticport = 4000
const app = express()
const port = process.env.PORT || staticport

sequelize.init_dataBase()

app
    .use(bodyParser.json())// middleware qui sert a parser toutes les entres de la web app du format string au format json
    .use(cors())

app.get('/', (req, res) => res.json('hello Message_list_api'))

require('./src/routes/add-message')(app)
require('./src/routes/get-message')(app)
require('./src/routes/remove-message')(app)

if(process.env.PORT){
    app.listen(port,() => console.log('le projet Message_list_api est demarée'))
} else{
    app.listen(port,() => console.log('le projet Message_list_api est demarée sur : http://localhost:'+staticport))
}
