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