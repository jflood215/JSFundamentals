



let test = 5;
if (typeof test === 'string') {
    console.log("It's a string!");
} else if (typeof test === 'number') {
    console.log("It's a number!");
} else if (typeof test === 'boolean') {
    console.log("It's a boolean");
} else {
    console.log("It's something else!");
}

// Rewrite as a SWITCH

switch (true) {
    case typeof test === 'string':
        console.log("It's a string!");
        break;
    case typeof test === 'number':
        console.log("It's a number!");
        break;
    case typeof test === 'boolean':
        console.log("It's a boolean!");
        break;
    default: console.log("It's something else!");
}

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
// Rewrite as a TERNARY

/*let test = 5;
if (typeof test === 'string') {
console.log("It's a string!");
} else if (typeof test === 'number') {
console.log("It's a number!");
} else if (typeof test === 'boolean') {
console.log("It's a boolean!");
} else {
console.log("It's something else!")
}
*/

test.typeof === 'string' ? console.log("This is a string!"):
test.typeof === 'number' ? console.log("This is a number!"):
test.typeof === 'boolean' ? console.log("This is a boolean!"):
console.log("This is something else!");



switch(typeof test){
    case 'string' :
        console.log("This is a string");
        break;
        case 'number' :
            console.log("This is a number");
            break;
            case 'boolean' :
                console.log("This is a boolean");
                break;
                default: console.log("This is something else!");
}

// Write a ternary that console logs "It worked!" if a number is between 1 and 10 and console logs "It didn't work" if it is not.

for (i = 0; i <=20; i++){
    i <= 10 ? console.log((i), "It worked!"):
    console.log((i), "It didn't work");
}

// Write an else if statement that checks the variable weather. If it is hot console log "Wear a t-shirt", 
//if it is cold console log "wear a coat" and if it is rainy console log "bring an umbrella"

var weather = 75;
if (weather >= 70){
    console.log('Wear a t-shirt');
} else if (weather <= 70){
console.log("Wear a coat");
} else {
    console.log("Bring an umbrella");
}

weather >= 70 ? console.log('Wear a t-shirt'):
weather <= 70 ? console.log('Wear a coat!'):
console.log('Bring an umbrella!');

switch (true) {
    case weather >=70 :
        console.log('Wear a t-shirt');
        break;
        case weather <=70 :
            console.log('Wear a coat!');
            break;
            default: console.log('Bring an umbrella!');
}

if (typeof test === 'string') {
console.log("It's a string!");
} else if (typeof test === 'number') {
console.log("It's a number!");
} else if (typeof test === 'boolean') {
console.log("It's a boolean!");
} else {
console.log("It's something else!")
}

switch(typeof test) {
    case 'string' :
        console.log("It's a string!");
        break;
        case 'number' :
            console.log("It's a number!");
            break;
            case 'boolean' :
                console.log("It's a boolean");
                break;
                default: console.log("It's something else!");
                break;
}

for (i = 0; i <=20; i++);
i <= 10 ? console.log("It worked!"):
console.log("It did not work!");

let num = 9;
(num < 11 && num > 0) ? console.log('It worked!') : console.log('It didn\'t work.')

function showdown(p1, p2) {
	p1.length < p2.length ? console.log("p1") :
	p2.length < p1.length ? console.log("p2") :
	console.log("tie");		
}

test.typeof === 'string' ? console.log("This is a string!"):
test.typeof === 'number' ? console.log("This is a number!"):
test.typeof === 'boolean' ? console.log("This is a boolean!"):
console.log("This is something else!");

showdown('John', 'Sofia');