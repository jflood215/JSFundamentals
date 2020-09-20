let fullName: string
fullName = 'John'

let age = 35

let array = ['object', 32]

let hasHair = true;

let numberList: number[]
numberList = [35, 18, 25]

let stringList: string[]
stringList = ['Hello', 'Yes']

let unionStringAndNumber: (number | string)[]

function subtractNumber(num1: number, num2: number): number // :number after the parentheses defines return type
{
    return num1 - num2
}

subtractNumber('2', 5) // Will not work

let myState: (string | number) = 'Indiana'

let person: {
    name: string;
    age: number;
    email: string;
    homeTown?: string // makes this field optional
};

person = {
    name: 'John',
    age: 35,
    email: 'test@email.com'
}

interface PersonData {
    name: string;
    age: number;
    email: string;
    homeTown?: string
}

let person2: PersonData // defines properties to PersonData


HTMLButtonElement

