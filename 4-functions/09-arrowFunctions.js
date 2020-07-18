/*
Arrow Functions
*/

//normal function declaration
function coffee(){
    return 'coffee is good';
}

//normal function expression
//unnamed function
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow functions are *always* annonymous
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());

// Arrow functions are not hoisted!

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3,2));

//concise vs. block body
//concise body
let apples = (x) => `There are ${x} apples`;
console.log(apples(10));

// This is a one line function ^^^ Pretty badass

//block body (below)

let bananas = (x) => {
    return `There are ${x} bananas`;
}
console.log(bananas(5));

//retrun must be explicitly written in a block-body arrow function

let func = () => 'hi';
console.log(func());

// Write arrow functions all on one line

