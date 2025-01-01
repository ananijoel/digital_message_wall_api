const {Message} = require('../dataBase/sequelize')

module.exports = (app) => {
    app.get('/api/get-message', async (req, res) => {
        Message.findAll()
        .then(Message =>{
            const message = 'todo find'
            res.json(Message)
        })
        .catch(error => {
            const message = `Le todo n'a pas pu être ajouté. Réessayez dans quelques instants.`
            res.status(500).json({ message, data: error })
          })
    })
}