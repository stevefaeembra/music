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

app.get('/scale/:tonic/:scale_name', function (req, res) {
  res.render('example', { 
    title: format("Scale : {} {}",req.params["tonic"],req.params["scale_name"]), 
    notez: music.notes_for_scale(req.params["tonic"],req.params["scale_name"]),  
    notenames:['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'],
    black: [1,3,6,8,10]
  })
});

app.get('/chord/:tonic/:chord_name', function (req, res) {
  res.render('example', { 
    title: format("Chord : {} {}",req.params["tonic"],req.params["chord_name"]), 
    notez: music.notes_for_chord(req.params["tonic"],req.params["chord_name"]),  
    notenames:['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'],
    black: [1,3,6,8,10]
  })
});

app.get(
  '/scales/:tonic',(req, res) => 
  res.send(
    music.scales_for_tonic(req.params["tonic"])
  )
);

app.get(
  '/chords/:tonic',(req, res) => 
  res.send(
    music.chords_for_tonic(req.params["tonic"])
  )
);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
