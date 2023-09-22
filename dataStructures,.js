//A data structure is a way to organize data. Examples of common javascript data structures include: objects, arrays, maps and sets
//An object is unaltered, noniterable collection of key value pairs and you use objects when you need to store and later access a value under a key

//An array which is an ordered iterable collection of values. Likewise, you use arrays when you need to store and later access a value under an index

//Map is like an array because it's iterable. However, it consists of key value pairs. It's important not to confuse a map with an object. With maps any value can be used as a key. With objects, keys can only be strings or symbols.

//A set is a data structure  where each item in the collection must be unique. For example, if you try to add a non unique item to a set, this operation will simply not be run. In other words, no errors will be thrown and no updates will be made to a set
const house1 = "red";
const house2 = "yellow";
const house3 = "blue";
const houses = new Set();
houses.add(house1).add(house2).add(house3);

const grades = [75, 95, 90, 85, 80, 85];
grades.map((grade) => grade); // displays the individual items in the array

//to calculate the average using a for loop
let gradesSum = 0;
for (i = 0; i < grades.length; i++) {
  gradesSum += grades[i];
}
console.log(gradesSum / grades.length); //returns 85

//Array methods: forEach, map and filter
// The forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.
const veggies = ["onion", "garlic", "potato"];
veggies.forEach((veggie, index) => {
  console.log(`${index} . ${veggie}`);
});

//Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
  return num > 20;
});

//Map method is used to map over each array item, based on what work it performed inside the function that is passed-in to the map as a parameter.
//It is important to note that the map method returns a new array of values

nums.map((num) => {
  return num / 10;
});
