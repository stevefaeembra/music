const music = require("./music.js")
const express = require('express')
format = require('python-format')

const hostname = '127.0.0.1';
const port = 3000;

const app = express()
app.set('views','./views')
app.set('view engine','pug')
app.use(express.static(__dirname + '/public'));
//app.disable('etag'); // prevent 304 cacheing

app.get('/:tonic/:scale_name', function (req, res) {
  res.render('example', { 
    title: 'Hey You', 
    notez: music.notes_for_scale(req.params["tonic"],req.params["scale_name"]),  
    notenames:['c','c#','d','d#','e','f','f#','g','g#','a','a#','b']})
});

// app.get(
//   '/:tonic/scale/:scale_name',(req, res) => 
//   res.send(
//     music.names_for_notes(
//       music.notes_for_scale(req.params["tonic"],req.params["scale_name"])
//     )
//   )
//);

app.get(
  '/:tonic/scales',(req, res) => 
  res.send(
    music.scales_for_tonic(req.params["tonic"])
  )
);

app.get(
  '/:tonic/chords',(req, res) => 
  res.send(
    music.chords_for_tonic(req.params["tonic"])
  )
);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
