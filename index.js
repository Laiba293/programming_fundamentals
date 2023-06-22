//  - Find the sum of numbers in an array.
//  - Input: Array of numbers.
//  - Output: Sum of all the numbers in the array.
//  - Test case: Input: [1, 2, 4, -1, 6, 0, 5] Output: 17

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 4, -1, 6, 0, 5];
const sum = findSum(numbers);
console.log(sum); // Output: 17

// Reverse a string.

//  - Input: A string.

//  - Output: The reversed string.

//  - Test case: Input: “Hello World!” Output: “!dlroW olleH”

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const inputString = "Hello World!";
const reversedString = reverseString(inputString);
console.log(reversedString);

// Reverse an array of integers.
//  - Input: An array of integers.
//  - Output: The reversed array.
//  - Test case: Input: [1, 2, 3, 4, 5]. Output: [5, 4, 3, 2, 1]
function reverseArray(arr) {
  return arr.reverse();
}

var inputArray = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(inputArray);
console.log(reversedArray);

// - Check if a string is a palindrome (Same string backwards)
//  - Input: A string, str.
//  - Output: True if str is a palindrome, False otherwise.
//  - Test case: Input: str = "racecar". Output: True

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  var reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

var str = "racecar";
var isPalindromeResult = isPalindrome(str);
console.log(isPalindromeResult);

// - Find the maximum element in an array.
//  - Input: An array of integers.
//   - Output: The maximum element in the array.
//  - Test case: Input: [8, 3, 10, 5, 2]. Output: 10

function findMaxElement(array) {
  var maxElement = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
}
var array = [8, 3, 10, 5, 2];
var maxElement = findMaxElement(array);
console.log(maxElement);

// - Remove duplicates from an array.
//  - Input: An array of integers.
//  - Output: The array with duplicates removed.
//  - Test case: Input: [1, 2, 3, 2, 4, 3, 5]. Output: [1, 2, 3, 4, 5]

function removeDuplicates(array) {
  var uniqueArray = [];

  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}

var array = [1, 2, 3, 2, 4, 3, 5];
var uniqueArray = removeDuplicates(array);
console.log(uniqueArray);

// - Check if a number is prime.
//  - Input: An integer, num.
//  - Output: True if num is prime, False otherwise.
//  - Test case: Input: num = 7. Output: True

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

var num = 7;
var isPrimeResult = isPrime(num);
console.log(isPrimeResult);

// - Count the number of occurrences of an element in an array.
//  - Input: An array of integers and a target element.
//  - Output: The count of occurrences of the target element in the array.
//  - Test case: Input: [1, 2, 2, 3, 4, 2, 5], target = 2. Output: 3

function countOccurrences(array, target) {
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      count++;
    }
  }

  return count;
}

var array = [1, 2, 2, 3, 4, 2, 5];
var target = 2;
var occurrenceCount = countOccurrences(array, target);
console.log(occurrenceCount);
