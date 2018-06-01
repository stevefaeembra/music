const music = require("./music.js")
const express = require('express')

const hostname = '127.0.0.1';
const port = 3000;

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

