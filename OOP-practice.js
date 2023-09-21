//Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  displayDetails() {
    return this
  }
}
let person1 = new Person("Akpan", 21, "Nigeria");
let person2 = new Person("Nath", 19, "Nigeria");

//console.log(person1.displayDetails());
//console.log(person2.displayDetails());

//Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height
    }
    calcArea(){
        return this.width * this.height
    }
}
let newRectangle = new Rectangle(40, 10)
console.log(newRectangle.calcArea());

//Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.year=year
        this.model = model
    }
    displayDetails(){
        return this
    }
}
class Car extends Vehicle{
    constructor(noOfDoors){
        super(make, model, year)
        this.noOfDoors = noOfDoors
    }
    displayDetails(){
super.displayDetails();
console.log("Doors:", this.noOfDoors)
    }
}
const vehicle = new Vehicle('benz', 'GLK-350', 2019)
console.log(vehicle.displayDetails())
 const car = new Car('Honda', "F-1250", 2020, 4)
 console.log(car.displayDetails());
