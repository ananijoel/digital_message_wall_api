const {Message} = require('../dataBase/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
module.exports = (app) => {
    app.post('/api/add-message', async (req, res) => {
      Message.create(req.body)
        .then(Message =>{
            const message = 'Message created'
            res.json({message, Message})
        })
        .catch(error => {
            if(error instanceof ValidationError) {
              return res.status(400).json({ message: error.message, data: error });
            }
            if(error instanceof UniqueConstraintError) {
              return res.status(400).json({ message: 'error.message', data: error });
            }
            const message = `Le todo n'a pas pu être ajouté. Réessayez dans quelques instants.`
            res.status(500).json({ message, data: error })
          })
    })
}