const music = require("./music.js")
const express = require('express')

const hostname = '127.0.0.1';
const port = 3000;

const app = express()

app.get(
  '/:tonic/scale/:scale_name',(req, res) => 
  res.send(
    music.names_for_notes(
      music.notes_for_scale(req.params["tonic"],req.params["scale_name"])
    )
  )
);

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

//var m = music.names_for_notes(music.notes_for_scale("c#","major"))
//console.log(m)