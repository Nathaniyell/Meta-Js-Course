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

//including the "throw new Error" in the try and catch block can help to force an error to be thrown from the try block to the catch block
//The throw keyword can be used outside the try block but it will not be possible to catch the errors

try {
  //block of code goes here
  throw new Error
} catch (err) {
  console.log(err);
}
console.log("This line runs");

try {
 console.log(a+b);
} catch (err) {
  console.log(err);
  console.log("There was an error");
  console.log("There error was served in the error log");
}
console.log("my program does not stop");
//The benefit of using a try and catch block is that even if javascript experiences an error during execution, it will not stop executing other pieces of code