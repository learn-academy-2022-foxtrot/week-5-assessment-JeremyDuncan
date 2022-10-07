//******************************************************************************
//******************************************************************************
// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought
// process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
//******************************************************************************
//******************************************************************************

//******************************************************************************
// --------------------1)👉Create a function that takes in a string and returns
// a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1,
// and "o" to 0.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with expect statements using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
it("returns a coded message", () => {
  //=== Provided Test Cases ===
  const secretCodeWord1 = "Lackadaisical";
  const secretCodeWord2 = "Gobbledygook";
  const secretCodeWord3 = "Eccentric";
  //=== Expected Test Results ===
  expected1 = "L4ck4d41s1c4l";
  expected2 = "G0bbl3dyg00k";
  expected3 = "3cc3ntr1c";

  expect(codeMessage(secretCodeWord1)).toEqual(expected1);
  expect(codeMessage(secretCodeWord2)).toEqual(expected2);
  expect(codeMessage(secretCodeWord3)).toEqual(expected3);
});

//---------------------||❌ Initial Test Results ❌||---------------------------
// FAIL  ./code-challenges.test.js
// ✕ returns a coded message

// ● returns a coded message

//   ReferenceError: codeMessage is not defined

//     35 |   expected3 = "3cc3ntr1c";
//     36 |
//   > 37 |   expect(codeMessage(secretCodeWord1)).toEqual(expected1);
//        |   ^
//     38 |   expect(codeMessage(secretCodeWord2)).toEqual(expected2);
//     39 |   expect(codeMessage(secretCodeWord3)).toEqual(expected3);
//     40 | });

//     at Object.expect (code-challenges.test.js:37:3)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.222 s
// Ran all test suites.
// error Command failed with exit code 1.
//------------------------------------------------------------------------------

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//******************************************************************************
// --------------------2)👉Create a function that takes in an array of words and
// a single letter and returns an array of all the words containing that
// particular letter.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with expect statements using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];

const letterA = "a";
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e";
// Expected output: ["Cherry", "Blueberry", "Peach"]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//******************************************************************************
// --------------------3)👉Create a function that takes in an array of 5 numbers
// and determines whether or not the array is a "full house". A full house is
// exactly one pair and one three of a kind.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with expect statements using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false
const hand4 = [7, 2, 7, 2, 7];
// Expected output: true

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
