"use strict";
let magicians = ['hamdan', 'anus', 'naila', 'amna', 'mano'];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians[i] = "the Great " + magicians[i];
    }
    return greatMagicians;
}
show_magicians(magicians);
let greatMagicians = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
