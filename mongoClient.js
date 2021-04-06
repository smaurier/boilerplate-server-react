const mongoose = require('mongoose')

const USERNAME = 'usertest'
const MDP = 'test123'
const DB = 'marketplace'
const URI = `mongodb+srv://${USERNAME}:${MDP}@cluster0.udhnc.mongodb.net/${DB}?retryWrites=true&w=majority`

const MongoDBClient = {
    initialize: () => {
        try {
            const client = mongoose.connect(URI, 
                {
                    useNewUrlParser: true, 
                    useUnifiedTopology: true 
                })
            client.then(() => console.log(`succesfully connected to DB : ${DB}`))
        } catch (error) {
            throw Error(error)
        }
    }
}

module.exports = MongoDBClient;