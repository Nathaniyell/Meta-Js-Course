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
console.log(virtualPet.sleepy); // true
virtualPet.nap(); //this updates the value of the sleep property
console.log(virtualPet.sleepy); // false

//OOP
/*
OOP revolves around the idea of organizing our programs using objects to group related data and functionality in contrast to the FP approach where the data used needs to be kept separate from the functions that operate on the data
*/

//write a code that calculates the total cost of buying a pair of shoes

let purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    let calculation = purchase1.shoes * purchase1.stateTax;
    console.log("Total Price: ", calculation);
  },
};
purchase1.shoes; // 100
purchase1.totalPrice(); // 120

//as opposed to
let footwear = 100;
let stateTax = 1.2;

function costOfShoe(price, tax) {
  return price * tax;
}
let toPay = totalPrice(footwear, stateTax); // returns 120
console.log(toPay);

//the "this" keyword essentially means this object. The advantage of the this keyword is that rather than having to think of the name of the object whose property you can just use the alias of the current object's name which is represented by the this keyword.
//Bearing the above in mind, the previous solution can be rewritten as:
let purchase2 = {
  shoes: 60,
  stateTax: 1.2,
  totalPrice: function () {
    let calculation = this.shoes * this.stateTax;
    console.log("Total Price: ", calculation);
  },
};
/*One of the most efficient ways of building new objects is by using classes
Classes are an essentially a blueprint of building new objects of a certain kind, repeatedly
Classes are built using the class keyword followed by the name of the class starung with a capital letter and a pair of curly braces. Inside the curly braces you have the constructor function which accepts as many parameters needed.
The role of the constructor function is to assign the passed in parameters to the future object properties. It is the constructor function that is used when instantiating new objects.
After the constructor is defined, you may add as many methods as you want. It is important to remember that you don't use the function keyword here

*/
class Car {
  constructor(color, speed) {
    this.color = color; //this is the object property and values
    this.speed = speed;
  }
  ignitionIsOn() {
    //This is the method
    console.log("Ignition is on");
  }
}
//Once the class definition is ready, you can build the car object as shown:
//-An instance of the class using the keyword new and that class' name, followed by opening and closing parentheses, and optional arguments, based on how the class itself is defined.
//This is otherwise known as instantiating the car class and saving the instance of the class to various variable names
const car1 = new Car("red", 120);
const car2 = new Car("red", 100);

car1.ignitionIsOn(); // gives access to the  method stored on the car class

//The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism.

/*Inheritance
Inheritance is one of the foundations of object-oriented programming.
It is a simple concept that works like this:
-There is a base class of "Animal".
-There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".
-Next, there is another class, inheriting from "Bird", and this class is "Eagle".
-Each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class
-Each of them are separate classes, meaning, each of them are separate blueprints for specific object instances that can be constructed as needed.
-To setup the inheritance relation between classes in JavaScript, you can use the extends keyword, as in class B extends A.
*/
class Animal {
  /* ...class code here... */
}
class Birds extends Animal {
  /* ...class code here... */
}
class Eagle extends Birds {
  /* ...class code here... */
}

/*
OOP Principles: Encapsulation
In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how your code works in order to "consume" the code.
for example, when you run:
"abc".toUpperCase(), you really dont have to worry or think about how the toUpperCase() method works. Even if the underlying syntaz - that is, the implementation of the toUpperCase() method changes - as long as it doesn't break your code, you dont have to worry about what it does in the background.
 */
/*
OOP Principle: Abstraction
Abstraction is all about writing code in a way that will make it more generalized.
The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.
It helps to think of it in the following terms: 
-An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 
-Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally
 */

/*POlymorphism
This concept simply translates to multiple forms. So, to understand what polymorphism is about, let's consider some real-life objects:
-A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.
-Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.
*/

const bicycle = {
  color: "red",
  bell: () => {
    return "Ring, ring! Watch out, please!";
  },
};
const door = {
  bell: () => {
    return "Ring, ring! You have a visitor!";
  },
};
bicycle.bell();
door.bell();
//From the above, one can conclude that the exact same name of method can have the exact opposite intent based on what object it is used for
//To make the code truly polymorphic, you can add the function declaration which accepts a parameter that is expected to be an abject in other to execute the different responses on the method based on which thing is passed as the parameter:

function ringTheBell(thing) {
  console(thing.bell());
}
ringTheBell(bicycle);
ringTheBell(door);

//Another example is the concatenation method which can give different output based on what it is used on. Thus it is said to exhibit a polymorphic behaviour since it behaves differently based on the context.
"abc"
  .concat("def") //returns "abcdef"
  ["abc"].concat(["def"]); //returns ["abc", "def"]

//Polymorphism is useful because it allows developers to build objects that can have the exact same functionality, namely, functions with the exact same name, which behave exactly the same.

class Bird {
  useWings() {
    console.log("Flying!");
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings(); //super keyword gives this method access to the methods of the parent class (Bird)
    console.log("Barely flapping!");
  }
}
class Penguin extends Bird {
  useWings() {
    console.log("Diving!");
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

/*
JavaScript has a number of built-in object types, such as:
 Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc. These objects are sometimes referred to as "native objects".

Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.
To use a constructor function, you must prepend it with the operator new.
For example, to create a new instance of the Date object, I can run: new Date(). What you get back is the current datetime, such as: Sun Sept 17 2023 00:30:08 GMT+0100 (Central European Standard Time) 
*/

//Besides constructor functions for the built-in objects, you can also define custom constructor functions:
function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

//prototype is an object that can hold properties to be shared by multiple of other objects
//Javascript starts from the object itself when looking for properties to work with, then if it can't find it on the object, it looks up to its prototype.
//All objects that are built from the prototype share the same functionality

let bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
}; //this is the prototype from which other objects can be created from as shown:

let eagle1 = Object.create(bird);
console.log(eagle1); //returns eagle1={}
console.log(eagle1.hasWings); // returns true because of the prototype it was created from

eagle1.canFly = false; //sets a new property on the eagle1 object and also  does not update the property of the prototype it was created from
console.log(eagle1.canFly); //returns false

class Train {
  constructor(colour, lightsOn) {
    this.colour = colour;
    this.lightsOn = lightsOn;
  }
  toggleLightsOn() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on? ", this.lightsOn);
    this.lightsOn
      ? console.log("lights are on, you can begin your voyage")
      : console.log("Please turn on the lights before you move the train");
  }
  getSelf() { //The getSelf() method prints out the properties on the object instance it is called on.
    console.log(this);
  }
  getPrototype() {
    let proto = Object.getPrototypeOf(this);
    console.log(proto);
    //The getPrototype() console logs the prototype of the object instance of the Train class. The prototype holds all the properties shared by all the object instances of the Train class. To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, the object instance inside of which this method is invoked.
  }
}
let myFirstTrain = new Train("red", false);
myFirstTrain.toggleLightsOn() //changes the value from false to true
myFirstTrain.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}