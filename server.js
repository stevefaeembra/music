const music = require("./music.js")
const express = require('express')

const hostname = '127.0.0.1';
const port = 3000;

const app = express()

// app.get(
//   '/',(req, res) => 
//   res.send(
//     music.names_for_notes(
//       music.notes_for_scale("c","major")
//     ).join(",")
//   )
// );

// app.listen(3000, () => console.log('Example app listening on port 3000!'))

var m = music.names_for_notes(music.notes_for_scale("c#","major"))
console.log(m)