/*
Comparison Operators
*/

//equality operators
console.log('3' == 3); //value is same
console.log(3 == '4'); //nothing is the same

// strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3); //Type & number must be exact

//not equal comparison & strict not equal compaison operator is the same, but opposite.

console.log(3 != 2); //true
console.log(3 !== 2); //true
console.log(3 != 3); //false

//And (both expressions on either side of the operator must be true for 'And' to return true)
console.log( 1<2 && 3>0); // both are correct so true
console.log(2<1 && 3>0); // only one true so false

//Or (At least one expression must be true, for or to = true)
console.log(1<2 || 3<0); //true
console.log(2<1 || 3<0); //false

let obj = {key: 'test'};
console.log(obj == {key: 'test'});

let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]);
console.log(arr = arr);