const {Message} = require('../dataBase/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
module.exports = (app) => { 
    app.delete('/api/remove-message/:id', async (req, res) => {
        Message.findByPk(req.params.id)
        .then(Message =>{
            if(Message == null){
                const message = 'todo not found'
                return res.status(404).json({message})
            }

            return Message.destroy({ where: { id: Message.id } })
            .then(_=>{
                const message = 'todo removed'
                res.json({message})
            })
            .catch(error => {
                const message = `L'item n'a pas pu être supprimé. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
              })
        })
    })
}