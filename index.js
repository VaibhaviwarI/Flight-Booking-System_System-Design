const dotenv = require('dotenv')
dotenv.config();
const express = require('express')

const { Logger} = require('./src/config')

const apiRoutes = require('./src/routes')



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const PORT = process.env.PORT

app.use('/api', apiRoutes);




app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
    Logger.info("Successfully started the server",  {})
})