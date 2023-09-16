/*Loops are used to continually execute repeated blocks of code until certain conditions are satisfied
Types of loops include: for, while and nested loops
Properties of this loops includes 1. a counter variable - 
var counter(i)= value
2. a condition - counter > 5
3. the counter must be incremented (increased or decreased depending on the need) - counter++ or counter--
The incrementer changes the value of i each time the code inside the loop is run

for(var i = 0; i<5; i++){
    console.log(i)
}

The while loop is similar but the start counter is set outside the while loop and the incrementer is set inside the loop's body
var i = 0
while(i<5){
    console.log(i)
i++
}
*/
for (var i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Happy New Year!");

var counter = 5;
while (counter > 0) {
  console.log(counter);
  counter = counter - 1;
}
var year = 2018;
while (year < 2023) {
  console.log(year);
  year++;
}

//Nested loops are used to perform multiple tasks at the same time as shown below
//It is important to note that the more nested loops there are, the more slow the code will run
//can be used in instances where one needs automated repetition of code e.g sorting numbers from highest to lowest

for (var week = 1; week <= 2; week++) {
  console.log(week);
  for (var day = 1; day <= 5; day++) {
    console.log("Week " + week + " Day " + day);
  }
}

//To know the summer months of each year from 2018 to 2023
for (var year = 2018; year < 2024; year++) {
  console.log(year);
  for (var month = 6; month < 9; month++) {
    console.log("......... " + month);
  }
}

//Multiplying two numbers together

for (var firstNum = 0; firstNum < 3; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(
      firstNum + " times " + secondNum + " is equal to " + firstNum * secondNum
    );
  }
}
for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold Medal");
      break;
    case 2:
      console.log("Silver Medal");
      break;
    case 3:
      console.log("Bronze Medal");
      break;
    default:
      console.log(i);
      break;
  }
}
