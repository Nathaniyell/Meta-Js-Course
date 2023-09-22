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
let top4EplClubs = ['Mancity', "Arsenal", "Liverpool", "Newastle"];
let top6EplClubs = [...top4EplClubs, "Man-united", "Chelshit"]
console.log(top6EplClubs)