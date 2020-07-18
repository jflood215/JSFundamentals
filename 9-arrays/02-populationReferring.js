/*
Arrays
*/

//what is an array?
//has [] brackets
//can hold multiple datatypes
//arrays can list datatypes in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys    0        1           2      3    etc.
console.log(typeof students);//object
console.log(students instanceof Array); //array instanceof = array
console.log(students[2]);

let name = students[6][1];
console.log(`Hello ${name}, you look nice today.`);

//recall for-of loop --> fives the values of an array
 let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

// for (f of food){
//     console.log(f);
// }

// //array methods

// food.push('Pizza'); // adds to end of array
// console.log(food);
// food.splice(1, 1, 'Bananas'); //adds and removes at index #s

// food.splice(2, 0, 'Sweet Potato Pie');
// console.log(food);

// food.pop(); // removes last element of an array
// console.log(food);

// food = food.slice(2,4); // first number is start, 2nd # is stop (not included)
// console.log(food);

//forEach allows us to iterate with loops specifically, directly grab elements and index //#endregion

food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(food)
    console.log(index);
})

// Loops through and grabs index and values

//`The ${food} food in our array is at position ${index}`;

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Wathchmen', 'The Sound of Music'];

movies.push('The Force Awakens');

console.log(movies);

movies.splice(3, 1, 'TLoEG');

console.log(movies);

movies.forEach(movie => console.log(movie)); // loop through values

console.log(movies.length); //length of array

// lets' do the following with an array
// check if we are working with an array
//flip the values within the array
//using a method, lets print the values of the new array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}

