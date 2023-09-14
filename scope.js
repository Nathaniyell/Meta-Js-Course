//Scope is about accessibility of variables
//The code that exist outside of a function is known as global scope and the code that exist inside a function is known as local scope or function scope
// Variables created within the local scope cannot be read by code at the global scope level. They are accessible only to functions located within the local scope.  

/*
ES6 Block code
A variable declared in a block of code is only accessible inside that block, all the other code declared outside of the code block cannot access it.
Block code is built when you declare a variable with let or const
*/
/*
characteristics of variables declared with var:
1. Can be used before it is declared
2. Same variable can be redeclared
3. Can be scoped to a function, or globally
*/
var globalScope = "This is the global scope"
function localScope(){
  return "This is the local scope"
}

/*
what makes let and const different from var?
1. variables declared with let and const cannot be used before it is declared
2. Variables cannot be redeclared
3. Variables declared with let and const are scoped to the block even within if statements and loops
4. Variables declared with const must be assigned during declaration.
*/