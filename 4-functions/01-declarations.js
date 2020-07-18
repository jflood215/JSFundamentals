//Functions

//At broadest level, functions do the following:
//1. Take some input, which the function will handle or process
//2. Process the input given to them
//3. Usually, but not always, return some value
//4. Can be invoked (used), as many times as we want, cutting down on code repetition

//example 1

let i = 0;

for (i; i <= 10; i++) {
    digit(i);
  }
  
  function digit(num){
      console.log(i);
      i %2 === 0 ? console.log('the number is even'):
      console.log('the number is odd');
  }




function newFunc(num){
   return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
newFunc(11);

//example 2

function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}
console.log(sentence('John', 'Flood'));
let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);

// Build a function that takes a complex type -- an array, and console.logs each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(inputArr){
    for (element of inputArr){
        console.log(element);
    };
};
iteratorFunc(arr);

iteratorFunc(arr2);

function logIt(name){
    console.log(name);
}

logIt('Joe');

function logIt2(){
    console.log('The second one');
}

logIt2();

function test(){
    return true;
};
console.log(test());

let double = function(num){
    return num * 2;
}

let test2 = double(3);

console.log(test2);

function practice(){
    return true;
    return false;
}

console.log(practice());


/*

