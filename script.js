// Lecture: Let and Const

// ES5
var name = 'Jane Smith';
var age = 25;
name = 'Jane Miller';
console.log(name);

// ES6
let nameNew = 'Zack';
const name6 = 'Jane Smith';
let age6 = '23';
console.log(name6);



// ES5
function driversLicense(passedTest){
        if (passedTest){
          var firstName = 'John';
          var yearOfBirth = 1998;

          console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

        }
}

driversLicense(true);

// ES6
function driversLicense2(passedTest){
        if (passedTest){
          let firstName = 'Brandon';
          const yearOfBirth = 1995;

          console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

        }
}

driversLicense2(true);

///////////////////////////////////////////////////////////////////////////////////
// Lecture: Blocks and IIFE's for ES6

{
  const a = 1;
  let b = 2;
}

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge (year){
      return 2020 - year;
}

console.log(`This is ${firstName} ${lastName}, he is ${calcAge(yearOfBirth)} years old today!` );

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
