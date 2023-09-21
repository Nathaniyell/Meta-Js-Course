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