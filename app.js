console.log("Hello World");
var person;
// "=" is called the assignment operator
person = "John";
console.log("Hello", person);

var petDog = "Rex";
var petCat = "Pepper";
// console.log(petDog)
// console.log(petCat)
console.log("My Dog's name is :", petDog);
console.log("My Dog's name is :", petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petCat + " says " + catSound);
catSound = "meow";
console.log(petCat + " says " + catSound);

//There are seven data types in javascript
const dataTypes = [
  "string",
  "number",
  "null",
  "undefined",
  "Boolean",
  "Bigint",
  "symbol",
];
//Text Values are known as the string data type while numerical value are known as the number data type
//Null represents the absence of a value
//Undefined represents a variable that has not yet been assigned a value
//BigInt is a data type that can accomodate a greater range of numbers that the number data type
//A symbol data type is used as unique identifier

const operators = {
  assignment: "=",
  //The assignment operator is right to left associative which implies that the value on the right gets assigned to the variable o the left of the assignment operator
  multiplication: "*",
  addition: "+",
  subtraction: "-",
  division: "/",
  greaterThan: ">",
  lessThan: "<",
  equualTo: "==",
  notEquualTo: "!=",
  modulusOperator: "%", //It returns the remainder of division
  logicalOperators: {
    "&&": "which checks and ensures that both conditions are true",
    /*Let's say you're tasked with coming up with some code that will check if the currentTime variable is between 9 a.m. and 5 p.m. The code needs to console.log true if currentTime > 9 and if currentTime < 17.
        solution: 
        let currentTime = 10
        console.log(currentTime > 9 && currentTime < 17)
        The above returns true because of the conditions specified

        var score = 8
        console.log("Mid-level skills:", score>0 && score<10) returns true
        */

    "||": "this is used to ensure that at least one of the conditions is true",
    /*The logical OR operator will always return true, except when both sides evaluate to false
        Your code needs to console.log true if the value of the variable currentTime is either less than 9 or greater than 17.
         let currentTime = 10
        console.log(currentTime < 9 && currentTime > 17) 

        var timeRemaining = 0
        var energy = 10
        console.log("Game over: ", timeRemaining == 0 || energy == 0) returns true
         */
    "!": "this operator as a switch, which flips the evaluated boolean value from true to false and from false to true.",
  },
};
/*The number data type represents all integer and decimal numbers
The double asterisks can be used to perform exponential operations e.g 10**2 = 100
A string is a collection of characters enclosed by single '' or double quotes "" e.g "This is a string"
An empty string = ""
Strings cannot be broken to the next line
== compares the value and not the type while === compares both the value and the type and it is called the strict equality operator
The addition assignment operator: += 
-The + operator, when used with number data type, adds those values together
-However, the + operator is also used to join string data type together
"inter" + "net" // "internet"
"note" + "book" // "notebook"
If the + operator is used to join strings, then it is referred to as the concatenation operator, and you'll say that it's used to concatenate strings.
*/
//Javascript was built in only 10 days in 1995 by a single person, Brendan Eich
//Node was built in 2009 by Ryan Dahl
