//A data structure is a way to organize data. Examples of common javascript data structures include: objects, arrays, maps and sets
//An object is unaltered, noniterable collection of key value pairs and you use objects when you need to store and later access a value under a key

//An array which is an ordered iterable collection of values. Likewise, you use arrays when you need to store and later access a value under an index

//Map is like an array because it's iterable. However, it consists of key value pairs. It's important not to confuse a map with an object. With maps any value can be used as a key. With objects, keys can only be strings or symbols.

//A set is a data structure  where each item in the collection must be unique. For example, if you try to add a non unique item to a set, this operation will simply not be run. In other words, no errors will be thrown and no updates will be made to a set
const house1 = 'red'
const house2 = 'yellow'
const house3 = 'blue'
const houses = new Set()
houses.add(house1).add(house2).add(house3)


const grades = [75, 95, 90, 85, 80, 85];
grades.map((grade) => grade); // displays the individual items in the array

//to calculate the average using a for loop
let gradesSum = 0;
for (i = 0; i < grades.length; i++) {
  gradesSum += grades[i];
}
console.log(gradesSum / grades.length); //returns 85
