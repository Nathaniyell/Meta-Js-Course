//Destructuring is like copying an item which then becomes independent of the original
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

//The spread operator is an addition that came with ES6. It is the shortest and simplest method to copy the properties of an object onto a newly created object. It is a multipurpose tool that can spread out array items and join objects together, it can be used to unpack an array

//The spread operator is characterized by three dots '...'
let top4EplClubs = ["Mancity", "Arsenal", "Liverpool", "Newastle"];
let top6EplClubs = [...top4EplClubs, "Man-united", "Chelsea"];
console.log(top6EplClubs);

//The rest operator is used to pack a box and add items to it. The rest operator can be used to destructure existing array items, rather than typing them out again
const eplClubs = [
  "Mancity",
  "Arsenal",
  "Liverpool",
  "Newastle",
  "Man-united",
  "Chelsea",
  "Tottenham",
  "Brighton",
  "A'Villa",
];
const [first, second, third, ...otherTeams] = eplClubs;
//What is done here is destructuing the first, second, and third teams from the list of teams as well as using the rest opearator to store the teams that have not be called during the destructuring

console.log(first); // "Mancity"
console.log(second); // "Arsenal"
console.log(third); // "Liverpool"
console.log(otherTeams); // ["Newastle", "Man-united", "Chelsea", "Tottenham", "Brighton","A'Villa"]

//When using the rest operator in a function definition, it must be the last parameter - this means that adding any other parameter after the rest operator in a function definition will result in an error

function addTaxToPrices(taxRate, ...itemsBought) {
  return itemsBought.map((item) => taxRate * item);
}
let shoppingCart = addTaxToPrices(1.1, 46,89,35,78)
console.log(shoppingCart); //[50.6, 97.9, 38.5, 85.8]

//Examples using the spread and rest operator
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//convert a string into an array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']