const music = require("./music.js")
const express = require('express')
format = require('python-format')

const hostname = '127.0.0.1';
const port = 3000;

const note_names = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];
const black_notes = [1,3,6,8,10];

const app = express()
app.set('views','./views')
app.set('view engine','pug')
app.use(express.static(__dirname + '/public'));

app.get('/scale/:tonic/:scale_name', function (req, res) {
  res.render('single', { 
    title: format("Scale : {} {}",req.params["tonic"],req.params["scale_name"]), 
    notez: music.notes_for_scale(req.params["tonic"],req.params["scale_name"]),  
    notenames: note_names,
    black: black_notes
  })
});

app.get('/chord/:tonic/:chord_name', function (req, res) {
  res.render('single', { 
    title: format("Chord : {} {}",req.params["tonic"],req.params["chord_name"]), 
    notez: music.notes_for_chord(req.params["tonic"],req.params["chord_name"]),  
    notenames: note_names,
    black: black_notes
  })
});

app.get(
  '/scales/:tonic',(req, res) => 
  res.render('multiple', {
    tonic: req.params["tonic"],
    title: format("Scales for {}",req.params["tonic"]), 
    notenames: note_names,
    black: black_notes,
    sets: music.scales_for_tonic(req.params["tonic"])
  })
);

app.get(
  '/chords/:tonic',(req, res) => 
  res.render('multiple', {
    tonic: req.params["tonic"],
    title: format("Chords for {}",req.params["tonic"]), 
    notenames: note_names,
    black: black_notes,
    sets: music.chords_for_tonic(req.params["tonic"])
  })
);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
