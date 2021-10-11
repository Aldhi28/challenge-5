const express = require('express')
const fs = require('fs')
const app = express()

app.use('/challenge-3',express.static('./chalenge-3'))
app.get('/html', (req,res,next) => {
    const indexData = fs.readFileSync('./chelenge-3/index.html')
    const data = indexData.toString()

    return res.status(200).contentType('html').send(data)
})
app.use('/challenge-4',express.static('./challenge-4'))
app.get('/html', (req,res,next) => {
    const indexData = fs.readFileSync('./chelenge-4/index.html')
    const data = indexData.toString()

    return res.status(200).contentType('html').send(data)
})

app.use(express.json())
app.get('/json', (req, res,next) => {
    const jsonData = fs.readFileSync('./data/user.json')
    const data = JSON.parse(jsonData.toString())

    return res.status(200).json(data)
})
// ke endpoint /data
// localhost:2100/data/user.json


app.listen(2100)