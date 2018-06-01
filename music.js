
const notes = {
    "c":0,
    "c#":1,
    "d":2,
    "d#":3,
    "e":4,
    "f":5,
    "f#":6,
    "g":7,
    "g#":8,
    "a":9,
    "a#":10,
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
}

const scales = {
    "major":[0,2,4,5,7,9,11],
    "minor":[0,2,3,5,7,9,11]
};

function notes_for_scale(tonic, scale_type) {
    // e.g. "c#","minor" -> [1,3,4,6...]
    var result = [];
    for (var offset in scales) {
        result.push((offset+notes[tonic])%12);
    }
    return result;
}

function names_for_notes(note_numbers) {
    // e.g. [0,1,2] -> [C,C#,D]
    result = []
    for (var index in note_numbers) {
        result.push(notes_from_numbers[index]);
    }
    return result;
}

module.exports.scales = scales;
module.exports.notes = notes;
module.exports.notes_from_numbers = notes_from_numbers;
module.exports.notes_for_scale = notes_for_scale;
module.exports.names_for_notes = names_for_notes;
