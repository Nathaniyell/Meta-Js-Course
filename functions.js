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

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

//Recursive functions
//Recursion is an alternative way to run repetitive code without the use of loops. When a function is called inside itself, it is known as recursion
let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
}

//Scope is about accessibility of variables
//The code that exist outside of a function is known as global scope and the code that exist inside a function is known as local scope or function scope
// Variables created within the local scope cannot be read by code at the global scope level. They are accessible only to functions located within the local scope.  

var globalScope = "This is the global scope"
function localScope(){
  return "This is the local scope"
}
//When writing FP(functional programming) code, we keep data and functionality separate and pass data into functions only when we want something computed.
//In FP, functions must always have a return value which can be used elsewhere in the code
function getDistance(mph, h){
return mph * h
}
var mph = 60
var h = 4
var distance = getDistance(mph, h)