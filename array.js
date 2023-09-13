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
 return arr
}
//Additionally, the function call can be saved to a variable

var simpleArr = arrayBuilder('apple', 'pear', 'plum')
console.log(simpleArr);