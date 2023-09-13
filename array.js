//arrays are used to group a sequence of variables in a collection

var train1 = ["wheat", "barley", "patato", "salt", "rocks"];
console.log(train1[0]); //can be used to access the value with the index of 0

//arrays are objects because they have some built-in properties and methods e.g pop(),push()

var fruits = [];
fruits.push("apple");
fruits.push("banana");
console.log(fruits);
//The push() method adds a new item to the array while the pop() method removes the last item from an array

function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
//Additionally, the function call can be saved to a variable

var simpleArr = arrayBuilder("apple", "pear", "plum");
console.log(simpleArr);

//Strings and arrays are iterables - they can be iterated over using a for of loop and also strings have similar workings

var arrayOfLetters = ["a", "b", "c"];
for (var i = 0; i < arrayOfLetters.length; i++) {
  console.log(arrayOfLetters[i]);
}

var letters = "abc";

for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

var user = "Nath";
var greet = "Hello";

console.log(greet + user); //Hello Nath
console.log(greet.concat(user));
//The concat method accepts a value you want to concatenate or join with a previous value

//THe length property is used to access the length of the string
//The charAt() method is used To read each individual character at a specific index in a string, starting from zero. The index is specified inside the opening and closing brackets
greet.length; //5
greet.charAt(4); //o

//The indexOf returns the location of the first position that matches a character
"test".indexOf("t"); //0
//The lastIndexOf finds the last match, otherwise it works the same as indexOf.

// The split method chops up the string into an array of sub-strings
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

// There are also some methods to change the casing of strings

greet.toUpperCase(); // "HELLO"
greet.toLowerCase(); // "hello"
