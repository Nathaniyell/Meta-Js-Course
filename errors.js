//ReferenceError occurs when a variable has not been defined but you attempt to use it in your code
//An error is a faulty piece of code that prevents the program from further execution
//Syntax error occurs when you write a piece of code that javascript cannot read - var greet="hello
//A TypeError is thrown when, for example, trying to run a method on a non-supported data type. - (5).pop

//try and catch keywords can be used to try a block of code and possibly catch any errors if there is one

try {
  //block of code goes here
} catch (err) {
  console.log(err);
}
console.log("This line runs");

//including the "throw new Error" in the try and catch block can help to force an error to be thrown from the try block to the catch block which then stops the execution of other parts of the code immediately.
//The throw keyword can be used outside the try block but it will not be possible to catch the errors

try {
  //block of code goes here
  throw new Error();
} catch (err) {
  console.log(err);
}
console.log("This line runs");

try {
  console.log(a + b);
} catch (err) {
  console.log(err);
  console.log("There was an error");
  console.log("There error was served in the error log");
}
console.log("my program does not stop");
//The benefit of using a try and catch block is that even if javascript experiences an error during execution, it will not stop executing other pieces of code

//null represents the intentional absence of any object value

//The undefined data type can only hold one value, undefined
//the undefined word is displayed after a console.log message because the console.log is a function and unless a function has some return value, it will always display undefine after executing its job

//Also the undefined word appears when a variable is defined without an assignment
var noise; //returns undefined

//Trying to access an object property that does not exist will return undefined

var game = {
  score: 40,
};
console.log(game.Score); //returns undefined

//The empty value is a string with no characters between them
var empty1 = "";

//Exercise on error handling
function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("The first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("The second argument not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("ERROR!", err);
  }
}
addTwoNums(5, "5");

//Defensive programming
//Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both.

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
  var condition2 = typeof match == "string" && match.length == 1; //if the match is a string and the length is equal to 1
  if (condition1 && condition2) { //if both condition matches
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass in the correct arguments to the function");
  }
}
letterFinder(1,2)
letterFinder("cat", "c");
