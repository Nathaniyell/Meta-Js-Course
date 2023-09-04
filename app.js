console.log("Hello World")
var person;
// "=" is called the assignment operator
person = "John"
console.log("Hello", person)

var petDog = "Rex"
var petCat = "Pepper"
// console.log(petDog)
// console.log(petCat)
console.log("My Dog's name is :", petDog)
console.log("My Dog's name is :", petCat)
var catSound = "purr"
var dogSound = "woof"
console.log(petCat + " says " + catSound)
catSound = "meow"
console.log(petCat + " says " + catSound)

//There are seven data types in javascript
const dataTypes = ["string", "number", "null", "undefined", "Boolean", "Bigint", "symbol"]
//Text Values are known as the string data type while numerical value are known as the number data type
//Null represents the absence of a value
//Undefined represents a variable that has not yet been assigned a value
//BigInt is a data type that can accomodate a greater range of numbers that the number data type
//A symbol data type is used as unique identifier

const operators ={
    assignment: "=",
    multiplication: "*",
    addition: "+",
    subtraction: "-",
    division: "/",
    greaterThan: ">",
    lessThan: "<",
    equualTo: "==",
    notEquualTo: "!=",
    modulusOperator: "%",
    logicalOperators:{
        "&&": "which checks and ensures that both conditions are true",
        "||": "this is used to ensure that at least one of the conditions is true",
        "!": "returns a false value if the result is true"
    }
}
//The number data type represents all integer and decimal numbers
//The double asterisks can be used to perform exponential operations e.g 10**2 = 100
//A string is a collection of characters enclosed by single '' or double quotes "" e.g "This is a string"
//An empty string = ""
//Strings cannot be broken to the next line