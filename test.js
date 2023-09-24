//Testing is how you verify the expectations you have regarding the behaviour of your code
function concatStrings(strA, strB) {
  return strA + strB;
}
concatStrings("abc", "def") // returns "abcdef"

concatStrings(1,2) // returns 3 which is the wrong response for the function since it was numbers that was passed in

//using a testing framework like jest, you can write tests for the above function to ensure that the function only runs when strings are passed in as arguments
expect(concatStrings("abc", "def")).toBe("abcdef") //this is essentially stating that you expect the calling of the function to give an output of the value specified in the toBe method
//Testing helps you verify that the function is behaving in the way you intended.
//Testing code ensures: conciseness,clarity and repeatability
//You can run these tests each time you want to instantiate a function
//Changing code structure without changing its functionality is known as refactoring

//Types of testing
//e2e - End to End testing: tries to imitate how a usier might interact with your app. Here you need to open your web application in a browser and then test it by interacting with it how a user might interact with it. In other words you are testing the entired finished software product from the perspective of the user. e2e tests are slow and time consuming
//Examples of e2e testing frameworks: WebdriverJs, Protractor and Cypress


//Integration testing: Typically involves testing how parts of your system interacts with other parts of your system - Testing how separate parts of your software works together. Examples include: React Testing library and Enzyme.
//Integration tests are faster and cheaper than e2e tests


//Unit testing