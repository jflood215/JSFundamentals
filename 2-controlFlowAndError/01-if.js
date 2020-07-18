/*
IF conditionals
*/

let isOn = true;
if (isOn == true){
    console.log('The light is on!');
}

if (isOn){
    console.log('The light is on, yay!');
}

let weather = 65;

if (weather < 70){
    console.log('Wear a jacket!');
}

let string = 'Tyler';

if (string === 'Tyler' || false){
console.log('if statements and conditions')
}

/*Write a conditional checking if the temperature is greater than 70. If it is, we want to print "Wear shorts today! It's going to be hot!"

var weather = 75;

if(weather > 70){
    console.log("Wear shorts today! It's going to be hot!");
}
More Practice
Practice writing if statements involving concepts from your life. Keep it simple:

If caveman is hungry, print: "Caveman need food."
If episode number equals ten, print: "I am sad that this season is ending."
Practicing with conditionals using if will make you a pro.
*/

let w = 72;

if(w > 70){
    console.log("Wear shorts today!");
}

episode = 10;

if (episode = 10){
    console.log('Im sad the season is over');
}

//Write a function to calculate and return the totalPrice of a quantity of products, including 7% tax.

function total(quantity, price){
    let totalPrice = (quantity * price) * 1.07;
    console.log(totalPrice);
}

total(5,7);

let arr = [1,2,3,4,5,'John'];
console.log(arr[5]);