Introduction
============

This is me learning Javascript.

Using node.js with the express framework, and pug as a template engine.

Starting up
===========

Run with

> node server.js

Scales for a given note
=======================

**To show all scales for a given tonic**

> http://127.0.0.1:3000/scales/[tonic]

e.g. http://127.0.0.1:3000/scales/e

Use '-sharp' or '-flat' to start on a black note

e.g. 

http://127.0.0.1:3000/scales/f-sharp

Chords for a given tonic note
=============================

> http://127.0.0.1:3000/chords/[tonic]

e.g.
>
http://127.0.0.1:3000/chords/c
>
http://127.0.0.1:3000/chords/f-sharp
>
http://127.0.0.1:3000/chords/b-flat

Show single chord
=================

>
http://127.0.0.1:3000/chord/f-sharp/minor6


Show single scale
=================
>
http://127.0.0.1:3000/scale/d/mixolydian

