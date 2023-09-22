//t's important to know that a for of loop cannot work on an object directly, since an object is not iterable.
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
//Running the above code will throw an error

//Contrary to objects, arrays are iterable. For example:  
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
//The output of the above code is as follows: red, oranage, yellow

//The for of loop can be run on arrays and also can be used to loop over objects. To do this, you need to use the Object.keys() method, which receives an object as its parameter. Remember, this object is the object you want to loop over. An array of properties is returned when you call the Object.keys() method as shown:
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

//Object.values() returns an array of values contained in the object
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

//The Object.entries() returns an array listing both the keys and the values.  
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ ['speed', 400], ['color', 'magenta'] ]
//The values that get returned are 2-member arrays nested inside an array. In other words, you get an array of arrays, where each array item has two members, the first being a property's key, and the second being a property's value.

// Effectively, it's as if you was listing all of a given object's properties, a bit like this: 
// [
//     [propertyKey, propertyVal],
//     [propertyKey, propertyVal],
//     ...etc
// ]

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}

//The for of loop only iterates over the object's own properties and does not count the prototype at all. While the for in loop iterates over the properties and not the prototype

//Template literals
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals
//The above code returns: Hello World !
//Using ES5 methods, you can only create strings using single or double quotations and using this method does not support the use of multi-line strings. In ES6, it is possible using the following syntax:
var multiLineString=`
This
is 
a
multiline
string
made possible
with bac-ticks in
ES6
`
console.log(multiLineString);

// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(){
    for(var item of dairy){
        console.log(item)
    }
}

// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (var prop of Object.keys(bird)) {
        console.log(prop + ": " +  bird[prop])
    }
}

// Task 3
function animalCan() {
    for (var prop of Object.keys(bird)) {
        console.log(prop + ": " +  bird[prop])
    }
    for (var prop of Object.keys(animal)) {
        console.log(prop + ": " +  animal[prop])
    }
}


logDairy();
birdCan();
animalCan();