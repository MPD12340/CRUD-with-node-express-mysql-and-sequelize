const app = require('./app')
const sequelize = require('./db/database')



const port = process.env.PORT || 5000

app.listen(port , async()=>{
    console.log(`Server is listening to port ${port}`)
    await sequelize.sync({force:false})
})