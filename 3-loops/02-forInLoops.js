/*
For In Loops
*/

// For In loops does not require that thing you loop through be numbered

let student = {name: 'John', awesome: true, degree: 'JavaScript', week: 1}

for (item in student){
   console.log(student[item]);
}


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(catArray[cat]);
}


let name = 'john';
let capName;

for (n in name){
    if (n == 0){
        capName = name[n].toUpperCase();
    } else {
        capName += name[n].toLowerCase();
    }
}

console.log(capName);

let teacher = 'ingeborg';
let capital;

for (n in teacher){
    if (n == 0){
        capital = teacher[n].toUpperCase();
    } else {
        capital += teacher[n].toLowerCase();
    }
}


console.log(capital);