// Magicians:Make a array of magician's names.Pass the array to a function called show_magicians(),Which prints the name of each magician in the array.

let magician : string[] = ['Harry Porter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}

show_magicians(magician)