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