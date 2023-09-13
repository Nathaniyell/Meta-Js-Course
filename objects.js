//Objects are used to store related data that describe the same variable
//Object can be described as collection of related properties

//each property is described as a key-value pair, where the usual variableName is the property key while the usual value is the property value here

var storeManager={};
storeManager.Movement =4;
storeManager.SocialSkills = 50;
storeManager.StreetSmart =50;
storeManager.Health = 30;
console.log(storeManager)
//The above uses the dot notation to build a store manager object

var assistantManager={
    movement: 3,
    socialSkills: 30,
    streetSmart: 30,
    health: 40,
}
//The above explains creating an object an assigning some values to its properties immediately after the ibject is created

//to add a new property to an already existing object, you use the dot notation as shown below

storeManager.nextAchievement = "Open a new store";
console.log(storeManager);

//The dot notation can be used to update alreadye existing properties as shown below

assistantManager.health = 50
console.log(assistantManager)

//Another way of building or accessing an object is by using the bracket notation and wrapping each property key as a string

//The bracket notation allows you to add space characters inside property names and also add numbers as string dataType
 
var house = {}
house["rooms"] = 4;
house["colour"]= 'ash';
house["priceNgn"]= 350000
house["number of doors"] = 5
console.log(house)

//JavaScript has handy built-in objects
/*
 Math.ceil() - rounds up to the closest integer 

 Math.floor() - rounds down to the closest integer 

 Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 

 Math.trunc() - trims the decimal, leaving only the integer
 Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 

Math.sqrt(16) - calculates the square root of 16, the result is 4 

Math.cbrt(8) - finds the cube root of 8, the result is 2 

Math.abs(-10) - returns the absolute value, the result is 10 

Logarithmic methods: Math.log(), Math.log2(), Math.log10() 

Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.

 Trigonometric methods: Math.sin(), Math.cos(), Math.tan()
*/
//A function that is a property of an object is called a method
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

//The type of operator accepts and evaluates a parameter and returns the name of the data type represented as a string.
typeof(car)