/*
Conditional statements are used to run pieces of code to demonstrate if a certain condition is true or false
*/
var result = 20;
if (result > 40) {
  console.log("Congratulations you passed the text!");
} else {
  console.log("Unfortunately you did not pass the test");
}
//Else if
var position = "first";
if (position === "first") {
  console.log("Gold");
} else if (position === "second") {
  console.log("silver");
} else if (position === "third") {
  console.log("bronze");
} else {
  console.log("No medals");
}

/*switch statements are used when there are blocks of conditions to be checked
if else and switch statements are sometimes  referred to as flow control statements.

var key = "value"
switch (key) {
    case value:
        console.log("some result")
        break;
    case value:
        console.log("some result")
        break;

    default:
        console.log("default result")
        break;
}
*/
var place = "first";
switch (place) {
  case "first":
    console.log("Gold");
    break;
  case "second":
    console.log("Silver");
    break;
  case "third":
    console.log("Bronze");
    break;
  default:
    console.log("No medal");
    break;
}

var day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Women's fellowship");
    break;
  case "Tuesday":
    console.log("Men's fellowship");
    break;
  case "Wednesday":
    console.log("Watch and Pray");
    break;
  case "Thursday":
    console.log("6am-6pm fasting");
    break;
  case "Friday":
    console.log("Spirited fellowship");
    break;
  case "Saturday":
    console.log("Sabbath Fasting");
    break;
  case "Sunday":
    console.log("Sunday Service");
    break;
  default:
    console.log("There is no such day");
}
