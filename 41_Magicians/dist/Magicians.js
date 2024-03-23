"use strict";
// Magicians:Make a array of magician's names.Pass the array to a function called show_magicians(),Which prints the name of each magician in the array.
let magician = ['Harry Porter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
