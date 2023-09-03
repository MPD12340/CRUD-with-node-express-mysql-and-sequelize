const Sequelize = require('sequelize')
const dbConfig = require('../config/db.config')

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASSWORD ,{
    host: dbConfig.DB_HOST,
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("Connected successfully!")
}).catch((err)=>{console.log("Error is :" + err)})

module.exports = sequelize