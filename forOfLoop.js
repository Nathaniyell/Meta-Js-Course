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