const addFive = require("./test"); //imports the addFive function

test("returns the number plus 5", () => {
  expect(addFive(1)).toBe(6);
});

const timesTwo = require("./timesTwo");
test("returns number times 2", () => {
  expect(timesTwo(10)).toBe(20);
});
//The test method accepts two arguments, the output to be printed on the console whenever the npm run test command is used and also a function to run whenever the npm run test command is initiated

//Test Driven Development(TDD) is a streamlined process of writing code that will satisfy some requirements - This typically involves writing a failing test for a javascript file and then writing code to make it pass. Example:
const statusOfKeys = require("./statusOfKeys");
const spyConsoleLog = jest.spyOn(console, "log");
spyConsoleLog.mockimplementation((keys) => keys);

test("returns true if statusOfKeys exists", () => {
  expect(statusofKeys).toBeDefined(); //expect that the function statusOfKeys exists
});
//The above test will fail because the statusOfKeys function has not been declared. On defining the function in your code, the test will now pass

//One of the rules of TDD is that you should write as little code as possible to make the test pass

test("test console log inside statusOfKeys", () => {
  statusOfKeys(true);
  expect(console.log).toBeCalled();
  expect(spyConsoleLog.mock.calls[0][0]).toBe(true);
  spyConsoleLog.mockReset();
  spyConsoleLog.mockRestore();
});

/*
Advantages of TDD include:
1. Minimizes regressions - accidental bugs introduced to old code by coding a new requirement 
2.Proves new implementation are not breaking parts of the app
3.Provides automated testing

*/