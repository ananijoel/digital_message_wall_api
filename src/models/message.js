const {Sequelize,Datatypes} = require('sequelize')
module.exports = (sequelize,DataTypes) => {
    return sequelize.define('message',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        text:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'update'
      })
}