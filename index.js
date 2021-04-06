const PORT = 4000
const express = require('express')
const cors = require('cors')
const app = express()
const mongoDBClient = require('./mongoClient')

app.use(cors())

app.get('/',(req, res) => {
    res.send('Hello Express :) !')
})

app.listen(PORT,()=>{
    console.log(`Server up and running at http://localhost:${PORT} 🎉🎉🎉`)
    mongoDBClient.initialize()
})