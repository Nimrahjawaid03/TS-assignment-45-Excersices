
// Write a program that creates objects containing these items.

// Datatype of person object
interface person {
    age : number,
    name : String,
    nationality : string,
    student : Boolean
}
// person object
let person :person = {
    age : 27 ,
    name : 'Nimrah' ,
    nationality : 'pakistani' ,
    student : true
}
// print person
console.log(person);


//Datatype of car object
interface car {
    maker : string,
    colour : string,
    automatic : boolean
}
// car object
let car = {
    maker : 'toyota',
    colour : 'Black',
    automatic : true
}

// print car
console.log(car);
