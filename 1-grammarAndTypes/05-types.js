//Boolean

var on = true;
console.log(on);

let off = false;
console.log(off);

//boolean can represent: true/false, on/off, yes/no, 0/1

//Undefined
/*
Undefined usually means a variable has been declared but a value is not assigned
*/

let grass;

var undef = undefined;
console.log(undefined);

//Null
/*
Null means a variable has been declared and assigned a value of null
*/

var empty = null;
console.log(empty); //null

/*
Undefined = You forgot to assign a value
Null = You assigned a null value (empty box)
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 9999999;

let rounded = 99999999999999999
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JS spits out the value within the quotes.

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concatenation vs. addition
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

let third = 1050 + '100';
console.log(third); //coercion


console.log(typeof third);

//Interpolation
//lets you use strings with dynamic content (they require backticks)

let age = 35;
let string = `my age is: ${age}`
console.log(string);

//Objects
/*
What is an object?

An object is a container that stores property names and their values
(it can hold multiple data types)

Denoted by {}
Have keys and values. Color = key, blue = value separated with a colon
Key-value, separated with comma
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);

console.log(hulk.age);
console.log(typeof hulk);

//Arrays
/*
Arrays store multiple values in an ordered way. They also hold 
multiple data types.
Denoted by []
Has values ['blue', 'green', 'yellow'];
*/

var stepsToBrushTeeth = [
    'uncap toothpaste', 'squeeze toothpaste', 'wet brush', 'brush teeth'
]

console.log(stepsToBrushTeeth);

console.log(stepsToBrushTeeth[1]);


let num = 30

console.log(typeof num);

if (typeof num == 'number') {
    console.log('it worked')
}