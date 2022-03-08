// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fib", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    // Example input: 6
    let num1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    let num2 = 10
    // Example input: 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fib(num1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fib(num2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.
// create a function named fib that takes a number as a param
// creating a starting array with the values of 1 and 1
  // so that we have two numbers to start with the rest will be dynamic
// use a loop n - 2 times since we hard coded our first two numbers 
  // where n is the number input
// push the sum of the current index and the index after it onto the end of the array
// return the final array 

const fib = (num) => {
  let startArr = [1,1]
  for(let i = 0; i < num - 2; i++) {
    startArr.push(startArr[i] + startArr[i+1] )
  }
  return startArr
}



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("oddNumbersInOrder", () => {  
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

    expect(oddNumbersInOrder(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddNumbersInOrder(fullArr2)).toEqual([-823, 7, 23])
  })
})

// b) Create the function that makes the test pass.
// Create a function that takes in an array as a paramter
// filter every value that isnt a number AND every number that isnt odd
  // suggested tools: typeof and the modulo
// store the filtered values on a new variable
// sort the final filtered results 
  // a,b => a-b




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sum", ()=>{
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", ()=>{
    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]

    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]

    const numbersToAdd3 = []
// Expected output: []
    expect(sum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(sum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(sum(numbersToAdd3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

// declare a function of sum
// sum takes in an array
// itterate through the array
// declare empty array newArr
// return value of index zero as is with a condtional
  //from index one onwards add previous value of new array 
  // and move on to next itteration
// return new array of values each containing an accumelating sum. 