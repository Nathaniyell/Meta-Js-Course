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

var counter = 5
while(counter > 0){
    console.log(counter);
    counter = counter - 1
}