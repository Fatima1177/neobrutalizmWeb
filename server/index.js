const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors') // Xeta gelmesin
app.use(cors())
app.use(express.json())

app.use("/images", express.static("images"));
require('dotenv').config()



mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(()=> console.log('MongooDB is connected'))
    .catch(()=> console.log('MongooDB is not connected'))


    
app.get('/', (req, res) => {
    res.json({mes:"Defalt Get Method"})
})

 
const productsRoute = require('./routes/products')
app.use('/products', productsRoute)

const adminsRoute = require('./routes/admins')
app.use('/admins', adminsRoute)




app.listen(3000, console.log('Server is running)))'))