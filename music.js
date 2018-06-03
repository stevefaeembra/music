var format=require("python-format");


const notes = {
    "c":0,
    "csharp":1,
    "d":2,
    "dsharp":3,
    "e":4,
    "f":5,
    "fsharp":6,
    "g":7,
    "gsharp":8,
    "a":9,
    "asharp":10,
    "b":11
};

const notes_from_numbers = {
    0: "c",
    1: "c#",
    2: "d",
    3: "d#",
    4: "e",
    5: "f",
    6: "f#",
    7: "g",
    8: "g#",
    9: "a",
    10: "a#",
    11: "b"
};

const chords = {
    "major":[0,4,7],
    "minor":[0,3,7],
    "6":[0,4,7,9],
    "7":[0,4,7,10],
    "major7":[0,4,7,11],
    "minor6":[0,3,7,10],
    "minormajor7":[0,3,7,11],
    "dim":[0,3,6,9]
};

const scales = {
    "major":[0,2,4,5,7,9,11],
    "ionian":[0,2,4,5,7,9,11], // same as major
    "minor":[0,2,3,5,7,8,10],
    "aeolian":[0,2,3,5,7,8,10], // same as minor
    "dorian":[0,2,3,5,7,9,10],
    "phygrian":[0,1,3,5,7,8,10],
    "lydian":[0,2,4,6,7,9,11],
    "mixolydian":[0,2,4,5,7,9,10],
    "locrian":[0,1,3,5,6,8,10]
};

function notes_for_scale(tonic, scale_type) {
    // e.g. "c#","minor" -> [1,3,4,6...]
    var result = [];
    for(var ix in scales[scale_type]) {
        result.push((scales[scale_type][ix]+notes[tonic])%12);
    }
    return result;
}

function scales_for_tonic(tonic) {
    // list all scales for given tonic
    var result={};
    for (var scale_type in scales) {
        scale_name=format("{} {}",tonic,scale_type);
        result[scale_name]=notes_for_scale(tonic,scale_type);
    };
    return result;
}

function notes_for_chord(tonic, chord_name) {
    notes2 = [];
    chord_offsets = chords[chord_name];
    for (var index in chord_offsets) {
        notes2.push((chord_offsets[index]+notes[tonic])%12);
    };
    return notes2;
}

function chords_for_tonic(tonic) {
    // list all chords for given tonic
    var result={};
    for (var chord_type in chords) {
        notes2 = notes_for_chord(tonic, chord_type);
        chord_description = names_for_notes(notes2);
        chord_name = format("{} {}",tonic,chord_type);
        result[chord_name] = chord_description;
    };
    return result;
};

function names_for_notes(note_numbers) {
    // map note numbers to names
    // e.g. [0,1,2] -> [C,C#,D]
    result = []
    for (var note in note_numbers) {
        result.push(notes_from_numbers[note_numbers[note]]);
    };
    return result;
}

module.exports.scales = scales;
module.exports.chords_for_tonic = chords_for_tonic;
module.exports.notes_for_chord = notes_for_chord;
module.exports.notes = notes;
module.exports.notes_for_scale = notes_for_scale;
module.exports.names_for_notes = names_for_notes;
module.exports.scales_for_tonic = scales_for_tonic;
