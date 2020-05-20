/*
Variables
*/

//What is a variable?
var a = 1;
var b = 2;
console.log(a+b);

//notes on naming variables:
//1) a variable must beging with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) javaScript is case sensitive -- 'hello' and 'Hello' are different variables

/*
Declarations, Initializations, Assignment

Declarations = Declare a variable ex. var a
Initialization = Variable is assigned a value.
Assignment = Giving a variable a value, it can change based on JS.
*/

var x;
console.log('Declaration 1:', x); //undefined

x = 10;
console.log('Initialization 1:', x); //10

x = 33;
console.log('Assignment 1:', x); //33

var y;

y = 'hello';

y = 'you are my friend';
console.log(y);

/*
Var, Let, and Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables
Const = Permanent variable declaration (can't be changed)
*/

let tonight = 'great!';
const elevenFifty = 'Amazing';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

