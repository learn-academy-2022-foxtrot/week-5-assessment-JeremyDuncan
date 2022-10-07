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
describe("codeMessage", () => {
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

const codeMessage = (msg) => {
  return msg
    .split("")
    .map((letter) => {
      if (letter === "a") {
        return 4;
      } else if (letter.toLowerCase() === "e") {
        return 3;
      } else if (letter.toLowerCase() === "i") {
        return 1;
      } else if (letter.toLowerCase() === "o") {
        return 0;
      } else {
        return letter;
      }
    })
    .join("");
};

//--------------------||✅ Final Test Results ✅||------------------------------
// PASS  ./code-challenges.test.js
// ✓ returns a coded message (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.196 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.85s.
//------------------------------------------------------------------------------

//******************************************************************************
// --------------------2)👉Create a function that takes in an array of words and
// a single letter and returns an array of all the words containing that
// particular letter.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with expect statements using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe("getWordsThatContainLetter", () => {
  it("returns an array of all the words containing a particular letter", () => {
    //=== Provided Test Cases ===
    const fruitArray = [
      "Mango",
      "Cherry",
      "Apricot",
      "Blueberry",
      "Peach",
      "Kiwi",
    ];
    const letterA = "a";
    const letterE = "e";
    //=== Expected Test Results ===
    expected1 = ["Mango", "Apricot", "Peach"];
    expected2 = ["Cherry", "Blueberry", "Peach"];

    expect(getWordsThatContainLetter(fruitArray, letterA)).toEqual(expected1);
    expect(getWordsThatContainLetter(fruitArray, letterE)).toEqual(expected2);
  });
});
//---------------------||❌ Initial Test Results ❌||---------------------------
// FAIL  ./code-challenges.test.js
// ✓ returns a coded message (2 ms)
// ✕ returns an array of all the words containing a particular letter (1 ms)

// ● returns an array of all the words containing a particular letter

//   ReferenceError: getWordsThatContainLetter is not defined

//     126 |   expected2 = ["Cherry", "Blueberry", "Peach"];
//     127 |
//   > 128 |   expect(getWordsThatContainLetter(fruitArray, letterA)).toEqual(expected1);
//         |   ^
//     129 |   expect(getWordsThatContainLetter(fruitArray, letterE)).toEqual(expected2);
//     130 | });
//     131 |

//     at Object.expect (code-challenges.test.js:128:3)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.21 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
//------------------------------------------------------------------------------

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const getWordsThatContainLetter = (arr, ltr) => {
  return arr.filter((word) => {
    return word.toLowerCase().indexOf(ltr) !== -1;
  });
};

//--------------------||✅ Final Test Results ✅||------------------------------
// PASS  ./code-challenges.test.js
// ✓ returns a coded message (1 ms)
// ✓ returns an array of all the words containing a particular letter (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.198 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.83s.
//------------------------------------------------------------------------------
//******************************************************************************
// --------------------3)👉Create a function that takes in an array of 5 numbers
// and determines whether or not the array is a "full house". A full house is
// exactly one pair and one three of a kind.
//******************************************************************************
describe("getWordsThatContainLetter", () => {
  it("determines whether or not the array is a “full house”", () => {
    //=== Provided Test Cases ===
    const hand1 = [5, 5, 5, 3, 3];
    const hand2 = [5, 5, 3, 3, 4];
    const hand3 = [5, 5, 5, 5, 4];
    const hand4 = [7, 2, 7, 2, 7];
    //=== Edge Case ===
    const hand5 = ["King", "King", "Ace", "Ace", "Ace"];
    const hand6 = ["Jack", "Queen", "Ace", "Ace", "Ace"];
    const hand7 = ["King", "King", 4, 4, 4];
    const hand8 = [1, 1, "Ace", "Ace", "Ace"];

    //=== Expected Test Results ===
    expected1 = true;
    expected2 = false;
    expected3 = false;
    expected4 = true;
    //=== Edge Cases ===
    expected5 = true;
    expected6 = false;
    expected7 = true;
    expected8 = true;

    expect(determineFullHouse(hand1)).toEqual(expected1);
    expect(determineFullHouse(hand2)).toEqual(expected2);
    expect(determineFullHouse(hand3)).toEqual(expected3);
    expect(determineFullHouse(hand4)).toEqual(expected4);

    expect(determineFullHouse(hand5)).toEqual(expected5);
    expect(determineFullHouse(hand6)).toEqual(expected6);
    expect(determineFullHouse(hand7)).toEqual(expected7);
    expect(determineFullHouse(hand8)).toEqual(expected8);
  });
});

//---------------------||❌ Initial Test Results ❌||---------------------------
// FAIL  ./code-challenges.test.js
// codeMessage
//   ✓ returns a coded message (1 ms)
// getWordsThatContainLetter
//   ✓ returns an array of all the words containing a particular letter
//   ✕ determines whether or not the array is a “full house” (1 ms)

// ● getWordsThatContainLetter › determines whether or not the array is a “full house”

//   ReferenceError: determineFullHouse is not defined

//     211 |     expected8 = true;
//     212 |
//   > 213 |     expect(determineFullHouse(hand1)).toEqual(expected1);
//         |     ^
//     214 |     expect(determineFullHouse(hand2)).toEqual(expected2);
//     215 |     expect(determineFullHouse(hand3)).toEqual(expected3);
//     216 |     expect(determineFullHouse(hand4)).toEqual(expected4);

//     at Object.expect (code-challenges.test.js:213:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.217 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
//------------------------------------------------------------------------------
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
