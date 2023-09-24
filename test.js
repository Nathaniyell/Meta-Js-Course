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

//Unit testing: Process of testing the smallest units of your source code in isolation e.g testing a function or a method since these are the smallest piece of code. A unit is the smallest piece of code that you can test separately from the rest of the app. Unit tests are self-contained making it fast to test and easy to run

//These three tests are generally used together when testing an application, starting with the unit test, then the integration test and finally the e2e test

//Introduction to JEST
//Jest is a javascript testing framework which is often used for testing code like React. It is maintained by META, it can also allow yoy to test Babel, TypeScript,Node,Angulat and various other frameworks

//Code coverage is a measure of what percentage of your code is covered by tests. Code coverage is a handy tool to guage the amount of your codebase that is included tests. The higher the code coverage, the lower to the chance to have unidentified bugs
