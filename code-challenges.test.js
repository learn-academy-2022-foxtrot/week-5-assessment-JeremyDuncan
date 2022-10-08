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

//************************** Explanation ***************************************
// I decided to use map() since there is for-loop discrimination in this
// workplace 😆. In order to use map() I had to:
// 1. Turn my string into an array
// 2. Apply map() to iterate through each letter
// 3. Use conditional statements to return the desired number if the letter
//    meets the condition set in the challenge. Else return the original letter.
// 4. Join the new array values back into a string.
//******************************************************************************

// const codeMessage = (msg) => {
//   return msg
//     .split("")
//     .map((letter) => {
//       if (letter === "a") {
//         return 4;
//       } else if (letter.toLowerCase() === "e") {
//         return 3;
//       } else if (letter.toLowerCase() === "i") {
//         return 1;
//       } else if (letter.toLowerCase() === "o") {
//         return 0;
//       } else {
//         return letter;
//       }
//     })
//     .join("");
// };

//------------------------------------------------------------------------------
// Refactored version with ternary operators -----------------------------------
//------------------------------------------------------------------------------
const codeMessage = (msg) => {
  return msg
    .split("")
    .map((letter) => {
      return letter.toLowerCase() === "a"
        ? 4
        : letter.toLowerCase() === "e"
        ? 3
        : letter.toLowerCase() === "i"
        ? 1
        : letter.toLowerCase() === "o"
        ? 0
        : letter;
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

//************************** Explanation ***************************************
// I decided to use filter() since I wanted to "filter" out values I do not need
// 1. Apply filter() to iterate through each word
// 2. Return the word if the indexOf() method does NOT return -1 for the
//    provided letter. -1 means that the letter is not present in the index
//    of the word.
//******************************************************************************

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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with expect statements using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

describe("determineFullHouse", () => {
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
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/************************** Explanation **************************************** 
          -----------------------------------------------
          --- 1️⃣ Iterate through array(cards) section ---
          -----------------------------------------------
👉 I use a forEach method to iterate through each value(card) in the 
array(cards) and then assign that value into an object(hand). which I will
accumulate the number of times any particular card may appear in a hand.

👉 I use a ternary operator to see if the key of the object contains a value 
or is undefined. 
                          Undefined = FALSE 🔴
👉 If the Key(Current Card) Value(Number of Cards) pair is undefined, then the 
condition would be FALSE, so add 1 to the Value(Number of Cards)

                              Value = TRUE 🟢
👉 if the Key(Current Card) Value(Number of Cards) pair has a Value already 
added to it, then the condition would be TRUE, so add +1 to the Value.

            -----------------------------------------------
            --- 2️⃣ Iterate through Object(hand) section ---
            -----------------------------------------------
👉 Next I want to iterate through an object and see if I have any card sets
that equal 2 or 3. 

👉 I have to use Object.values to transform my object(hand) into an array, 
then I use the forEach method to iterate through each value(cardSet) in the 
array. 
                      
👉 If card count of a card set equals 2 assign the value of TRUE to twoCards       
👉 If card count of a card set equals 3 assign the value of TRUE to threeCards

                        -----------------
                        --- 3️⃣ Return ---
                        -----------------
👉 If the value of twoCards and threeCards equal TRUE, Return TRUE 🟢
else
👉 Return FALSE 🔴

*******************************************************************************/

// const determineFullHouse = (cards) => {
//   let threeCards, twoCards; //Store Boolean values if condition TRUE or FALSE
//   const hand = {}; // Object to hold "counted" cards

//   //1️⃣
//   cards.forEach((card) => {
//     hand[card] = hand[card] ? hand[card] + 1 : 1;
//   });

//   //2️⃣
//   Object.values(hand).forEach((cardSet) => {
//     cardSet === 3 ? (threeCards = true) : null;
//     cardSet === 2 ? (twoCards = true) : null;
//   });

//   //3️⃣
//   return threeCards && twoCards ? true : false;
// };

//------------------------------------------------------------------------------
// Another version with map() and reduce() -------------------------------------
//------------------------------------------------------------------------------
// const determineFullHouse = (cards) => {
//   const hand = {};
//   return cards
//     .map((card) => {
//       let threeCards, twoCards;

//       hand[card] = hand[card] ? hand[card] + 1 : 1;

//       Object.values(hand).forEach((cardSet) => {
//         cardSet === 3 ? (threeCards = true) : null;
//         cardSet === 2 ? (twoCards = true) : null;
//       });
//       return threeCards && twoCards ? true : false;
//     })
//     .reduce((val, nextVal) => (val = nextVal === true ? true : false));
// };

//------------------------------------------------------------------------------
// Final Refactored Version ----------------------------------------------------
//------------------------------------------------------------------------------
const determineFullHouse = (cards) => {
  const hand = {};
  cards.forEach((card) => {hand[card] = hand[card] ? hand[card] + 1 : 1});
  const sets = Object.values(hand);
  return sets.includes(2) && sets.includes(3) ? true : false;
};

//--------------------||✅ Final Test Results ✅||------------------------------
// PASS  ./code-challenges.test.js
// codeMessage
//   ✓ returns a coded message (1 ms)
// getWordsThatContainLetter
//   ✓ returns an array of all the words containing a particular letter
// determineFullHouse
//   ✓ determines whether or not the array is a “full house” (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.199 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.88s.
//------------------------------------------------------------------------------
