/*
Scope
*/

// What is scope?

// JS has both local and global scope.

//let x = 12;
/*
function scope(){
    let x = 33;
    console.log(x);
}
scope(); // 33
console.log(x); // 12

//example 2

let y =12;

function test(){
    y = 33;
    console.log(y);
}

test()
console.log(y);
*/
//more scope
/*
let x = 1;

function scope() {
    let x = 2;
    function scopeInner() {
        let x = 3;
        console.log(x);
    }
    scopeInner();
    console.log(x);
}
scope();
console.log(x);

*/

//example 4

var x =12;

function scope(){
    var x =33;
    if (true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);

/*

Initialize or create a local git repository
git init
Check on files or folders git progress
git status
First step of saving files to local git repository
git add .
Second step of saving files to local git repository
git commit -m “insert message”  ---> detailed message possibly describing what files or topics we covered
Sending code to a remote repository (GitHub)
git push origin master

*/
