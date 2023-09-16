// Functions help in running the same set of stored instructions repeatedly without requiring you to adjust the settings every time
//They also help in keeping the code DRY

function addNums() {
  //body of function
}
addNums(); //invoke function

//values passed to the function are known as function parameters and are placed inside the function definition

function addTwoNums(a, b) {
  var c = a + b;
  console.log(c);
}
addTwoNums(10, 20); //the values passed to the function when invoking it are called arguments

//Function parameters are like variables and the actual values of these parameters are called arguments and are made available when the function is invoked

//LetterFinder function
function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
letterFinder("test", "t");

//Functional Programming
//Being able to return custom values is one of the foundations that makes functional programming possible.
//The purpose of this program is to perform currency conversions

var firstCurrency = 100;
var secondCurrency = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}
secondCurrency = convertCurrency(firstCurrency, exchangeRate);
console.log(secondCurrency);

//Recursive functions
//Recursion is an alternative way to run repetitive code without the use of loops. When a function is called inside itself, it is known as recursion
let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
}

//When writing FP(functional programming) code, we keep data and functionality separate and pass data into functions only when we want something computed.
//In FP, functions must always have a return value which can be used elsewhere in the code
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 4;
var distance = getDistance(mph, h);

/* 
A higher-order function is a function that has either one or both of the following characteristics:
It accepts other functions as arguments
It returns functions when invoked
*/
function addTwoNums(getNumber1, getNumber2) {
  console.log(getNumber1() + getNumber2());
}
//the above function declaration of addTwoNums as describing how it will deal with the getNumber1 and getNumber2 inputs: once it receives them as arguments, it will then attempt invoking them and concatenating the values returned from those invocations.

//A pure function returns the exact same result as long as it's given the same values.
function addTwoNums(a, b) {
  console.log(a + b);
}
//This function will always return the same output, based on the input. For example, as long as we give it a specific value, say, 5, and 6:
addTwoNums(5, 6); //returns 11

/*
Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

This includes: 
changing variable values outside of the function itself, or even relying on outside variables 
calling a Browser API (even the console itself!) 
calling Math.random() - since the value cannot be reliably repeated*/

// Parameters are essentially passed to functions by value — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, the change is not reflected globally or in the code which called that function.

// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

// When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

//Function expression
const myFunction = function () {};
//function declaration
function myFunction() {}
//Function hoisting comes to play when a function is called before it is declared, essentially the JavaScript interpreter hoists the entire function declaration to the top of the current scope
//Function hoisting only works with function declarations — not with function expressions.
