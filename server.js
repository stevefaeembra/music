const music = require("./music.js")
const express = require('express')

const hostname = '127.0.0.1';
const port = 3000;

const app = express()

app.get('/', (req, res) => res.send(music.names_for_notes([1,4,7])));

app.listen(3000, () => console.log('Example app listening on port 3000!'))

