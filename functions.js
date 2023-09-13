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
//The purpose of this program is to perform currency conversions

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate){
  return amount * rate
}
currencyTwo = convertCurrency(currencyOne, exchangeRate)
console.log(currencyTwo);
