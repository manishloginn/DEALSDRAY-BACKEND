const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')



const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(cors({
    credentials:"http://localhost:3000/",
}))

const { route } = require('./routes/route')



mongoose.connect(process.env.mongoUri)
    .then(() => {
        console.log('db connected')
    }).catch((error) =>
        console.log(error)
    )


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routes
app.use('/', route)







app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})








