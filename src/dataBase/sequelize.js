const {Sequelize,DataTypes} = require('sequelize')
let sequelize = null
let demo = false
message_model = require('../models/message')

if(process.env.NODE_ENV === 'production'){
    sequelize = new Sequelize('ulrihrpy_anatide', 'ulrihrpy_anatide', '775SGnvmdesEKk9RAKN9mk3Y', {
       host: 'localhost',
       port: 3306,
       dialect: 'mariadb',
       dialectOptions: {
         timezone: 'Etc/GMT',
       },
       logging: false
     })
} else {
    sequelize = new Sequelize('todolist', 'root', '', {
       host: 'localhost',
       dialect: 'mariadb',
       dialectOptions: {
         timezone: 'Etc/GMT',
       },
       logging: false
     })
}

const Message = message_model(sequelize,DataTypes)
let init_dataBase
if(demo){
    init_dataBase = async () => {
        await sequelize.sync({force:true})
        await Message.bulkCreate([
            {
                text:'faire les courses'
            }
        ])
    }
} else {
    init_dataBase = () => {
        return sequelize.sync(
         {force:false}
        ).then(() => {
          console.log('La base de données a bien été initialisée !');
        });
      }
}

module.exports = { init_dataBase, Message }