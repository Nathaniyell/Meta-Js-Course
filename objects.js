//Objects are used to store related data that describe the same variable
//Object can be described as collection of related properties

//each property is described as a key-value pair, where the usual variableName is the property key while the usual value is the property value here

var storeManager = {};
storeManager.Movement = 4;
storeManager.SocialSkills = 50;
storeManager.StreetSmart = 50;
storeManager.Health = 30;
console.log(storeManager);
//The above uses the dot notation to build a store manager object

var assistantManager = {
  movement: 3,
  socialSkills: 30,
  streetSmart: 30,
  health: 40,
};
//The above explains creating an object an assigning some values to its properties immediately after the ibject is created

//to add a new property to an already existing object, you use the dot notation as shown below

storeManager.nextAchievement = "Open a new store";
console.log(storeManager);

//The dot notation can be used to update alreadye existing properties as shown below

assistantManager.health = 50;
console.log(assistantManager);

//Another way of building or accessing an object is by using the bracket notation and wrapping each property key as a string

//The bracket notation allows you to add space characters inside property names and also add numbers as string dataType

var house = {};
house["rooms"] = 4;
house["colour"] = "ash";
house["priceNgn"] = 350000;
house["number of doors"] = 5;
console.log(house);

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
car.turnTheKey = function () {
  console.log("The engine is running");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log(car);
car.turnTheKey();
car.lightsOn();

//The type of operator accepts and evaluates a parameter and returns the name of the data type represented as a string.
typeof car;

/*OOP
In OOP, data and functionality are grouped as properties and methods inside objects.


*/
var virtualPet = {
  sleepy: true, //data
  nap: function () {}, //functionality||method
};
//In OOP, methods update properties stored in the object instead of generating new return values.
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy) // true
virtualPet.nap() //this updates the value of the sleep property
console.log(virtualPet.sleepy) // false

//OOP
/*
OOP revolves around the idea of organizing our programs using objects to group related data and functionality in contrast to the FP approach where the data used needs to be kept separate from the functions that operate on the data
*/

//write a code that calculates the total cost of buying a pair of shoes

let purchase1 ={
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function(){
    let calculation = purchase1.shoes * purchase1.stateTax
    console.log("Total Price: ", calculation)
  }
}
purchase1.shoes // 100
purchase1.totalPrice() // 120

//as opposed to
let footwear = 100
let stateTax = 1.2

function costOfShoe(price, tax){
return price * tax
}
let toPay = totalPrice(footwear, stateTax) // returns 120
console.log(toPay);

//the "this" keyword essentially means this object. The advantage of the this keyword is that rather than having to think of the name of the object whose property you can just use the alias of the current object's name which is represented by the this keyword.
//Bearing the above in mind, the previous solution can be rewritten as:
let purchase2 ={
  shoes: 60,
  stateTax: 1.2,
  totalPrice: function(){
    let calculation = this.shoes * this.stateTax
    console.log("Total Price: ", calculation)
  }
}
/*One of the most efficient ways of building new objects is by using classes
Classes are an essentially a blueprint of building new objects of a certain kind, repeatedly
Classes are built using the class keyword followed by the name of the class starung with a capital letter and a pair of curly braces. Inside the curly braces you hace the constructor function whic accepts as many parameters needed.
The role of the constructor function is to assign the passed in parameters to the future object properties. It is the constructor function that is used when instantiating new objects.
After the constructor is defined, you may add as many methods as you want. It is important to remember that you don't use the function keyword here

*/

class Car{
  constructor(color, speed){
    this.color = color //this is the object property and values
    this.speed = speed
  }
  ignitionIsOn(){ //This is the method
    console.log("Ignition is on");
  }
}
//Once the class definition is ready, you can build the car object as shown:
//-An instance of the class using the keyword new and that class' name, followed by opening and closing parentheses, and optional arguments, based on how the class itself is defined.
//This is otherwise known as instantiating the car class and saving the instance of the class to various variable names
const car1 = new Car("red", 120)
const car2 = new Car("red", 100)

car1.ignitionIsOn() // gives access to the  method stored on the car class