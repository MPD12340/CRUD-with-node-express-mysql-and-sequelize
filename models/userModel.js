const { DataTypes } = require("sequelize");
const sequelize = require('../db/database')

const userSchema =  sequelize.define('User',{
    uuid:{
   type:DataTypes.UUID,
   defaultValue:DataTypes.UUIDV4,
   primaryKey: true,
    },
name:{
    type:DataTypes.STRING,
    allowNull:false
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
    isEmail: {
        msg: 'Invalid email format',
      },
    },
},
phoneNumber:{
    type:DataTypes.STRING,
    allowNull:false
}
},{
    timestamps:false
})

module.exports = userSchema