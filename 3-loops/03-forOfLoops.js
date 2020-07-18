// For of Loops

//Of requires that the 'thing' you're looping through is iterable (numbered)

// let student = {
//     name: 'Peter',
//     isAwesome: true,
//     degree: 'JavaScript',
//     week: 1
// }

// for (item of student){
//     console.log(item);
// }

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat);
    
}

for (cat in catArray){
    console.log(catArray[cat]);
}

let str = 'abcde';

for (let char in str) {
  console.log(char.toUpperCase());
}


let names = ['John', 'Sofia'];

names.forEach(name => {
    console.log(name);
})

let dogs = ['Solomon', 'Bradley'];

dogs.forEach( dog => {
    console.log(dog)
}

)

//Write a for loop that counts to 50 by t

for (i = 0; i <= 50; i+=5){
console.log(i)}

for (i = 0; i < 51; i += 5){
    console.log(i);
    }

   // Write a for in loop that console logs each of the values in the following object.
let pet = {
name: "Finn",
breed: "Shiba Inu",
age: 2,
goodBoy: true
};

for (value in pet){
    console.log(pet[value]);
}

//Write and invoke a function that counts down from 10 to 0.


function countDown( ) {
    for (i = 10; i >= 0; i--)
    console.log(i)
    }
    countDown()

   // Write a for in loop that console logs each item in the following array.
let seasons = ['spring', 'summer', 'autumn', 'winter'];

for (item in seasons){
    console.log(seasons[item]);
}

//Write a function that accepts the parameter food and console logs "My favorite food is ..." using the parameter.

function favorite(food) {
console.log('My favorite food is', food);
}

favorite('Pizza');

//Write a function that takes in the parameters crust, sauce, cheese, and topping to build a pizza. Have the function console log your pizza order.

function pizza(crust, sauce, cheese, topping){
    console.log("I'd like the following on my Pizza", crust, sauce, cheese, topping);
}

pizza('thin', 'red', 'mozzerella', 'pepperoni');

function pizza(crust, sauce, cheese, topping){
    console.log(`I would like a pizza with ${crust} crust, ${sauce}, ${cheese}, and ${topping}`);
    }
    pizza('thin', 'marinara', 'mozarella', 'olives')


  //  What is the syntax for a forEach( ) that will console log each of the items in this array?
let characters = ['Mario', 'Luigi', 'Yoshi', 'Peach']

characters.forEach( value => {
    console.log(value);
}

 )
    
 //Write a ternary that console logs "It worked!" if a number is between 1 and 10 and console logs "It didn't work" if it is not.

 let tern = 5;
 tern >0 && tern <11 ? console.log("It worked!") :
 console.log("It didn't work");

 let test = 5;

switch (typeof test) {
    case 'string':
    console.log("It's a string!");
    break;
    case 'number':
    console.log("It's a number!");
    break;
    case 'boolean':
    console.log("It's a boolean!");
    break;
    default:
    console.log("It's something else!");
    break;
    }

    switch (true){
        case test === 'string':
            console.log("It's a string");
            break;
            case test === number:
                console.log("It's a number");
                break;
                case test === 'boolean':
                    console.log("It's a boolean");
                    break;
                    default: console.log("It's something else!");
                    break;
    }

    function isRightTriangle(a, b, c){
        if (a ** 2 + b ** 2 == c ** 2) console.log(true);
        console.log(false);
    }

    isRightTriangle(3,4,5);

    