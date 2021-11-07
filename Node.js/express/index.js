// Prepare global server
const express = require('express')
const app = express()
const port = 3000

// Connection to mongoDB database
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://admin:admin@cluster0.pnycf.mongodb.net/someDB?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect((err) => {
    if (err) console.log('db connection error', err)

    const db = client.db('someDB')
    app.db = db
})

// use middleware for POST params parse
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
    bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true,
    })
)

app.get('/notes', async (req, res) => {
    let data = []
    await app.db
        .collection('notes')
        .find({})
        .forEach((el) => data.push(el))

    res.json(JSON.stringify(data))
})
app.post('/notes', async (req, res) => {
    const status = await app.db.collection('notes').insertOne({
        text: req.body.text,
    })

    console.log(status)

    res.json(
        JSON.stringify({
            status: 200,
            ...req.body,
        })
    )
})

app.listen(port, () => {
    console.log(`Server in running on port: ${port}`)
})
