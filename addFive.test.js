const addFive = require("./test"); //imports the addFive function

test("returns the number plus 5", () => {
  expect(addFive(1)).toBe(6);
});

const timesTwo = require('./timesTwo');
test('returns number times 2', () => {
    expect(timesTwo(10)).toBe(20)
});
//The test method accepts two arguments, the output to be printed on the console whenever the npm run test command is used and also a function to run whenever the npm run test command is initiated
