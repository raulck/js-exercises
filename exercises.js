// ---------------- JS Exercises

const mltDimArray = [[[1, 2, 3, [2, 3]], [1, 2, 3], [3, 4], [1, 2, 3], 7]];

// -- sum of mulidemensional array

const sumArray = (array) => {
  return array.reduce((sum, item) => {
    if (Array.isArray(item)) {
      return sum + sumArray(item);
    } else if (typeof item === "number") {
      return sum + item;
    }
    return sum;
  }, 0);
};

// console.log("sum of multidemensional array", sumArray(mltDimArray));

// -- longest word/s in sentence

const sentence = "The quick brown fox jumped over the lazy dog";

const longestWord = sentence
  .split(" ")
  .reduce((longest, word) => (word.length > longest.length ? word : longest));

// console.log("longest word", longestWord);

const findLongestWords = (sentence) => {
  const words = sentence.split(" ");

  return words.reduce(
    (longestWords, currentWord) => {
      if (currentWord.length > longestWords[0].length) {
        return [currentWord];
      } else if (currentWord.length === longestWords[0].length) {
        longestWords.push(currentWord);
      }

      return longestWords;
    },
    [""]
  );
};

// console.log(findLongestWords("ee dfds mklo njop kolp"));

// -- check if word is palindrome

const checkPalindrome = (string) => {
  const normalizedString = string.toLowerCase().split("").join();
  const reversedString = string.toLowerCase().split("").reverse().join();

  return normalizedString === reversedString;
};

// reverse string withoout built in method

const reverseStringManual = (string) => {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
};

// console.log(checkPalindrome("racecar")); // true
// console.log(reverseStringManual("night")); // 'thgin'

// -- remove duplicates from array and sort

const duplicateArrayValues = [1, 1, 2, 3, 3, 5, 5, 6, 7, 8, 4, 4];

const removeDuplicatesSet = (array) => {
  return [...new Set(array)];
};

const removeDuplicates = (array) => {
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
};

// console.log(removeDuplicatesSet(duplicateArrayValues).sort((a, b) => b - a));
// console.log(removeDuplicates(duplicateArrayValues));

// -- find maximum count of consecutive ones in array

const onesArray = [1, 2, 3, 1, 1, 1, 1, 1, 7, 6, 1, 1];

const maxCountConsecutive = (array) => {
  let maxCount = 0;
  let currentCount = 0; // count streaks of 1s

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      currentCount = currentCount + 1;
      if (currentCount > maxCount) {
        // update max count if current count is higher
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
};

// console.log(
//   "maximum count of consecutive ones",
//   maxCountConsecutive(onesArray)
// );

// -- find factorial of number

const findFactorial = (num) => {
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// console.log("find factorial", findFactorial(6));

// -- check if one word can be formed by rearranging other

const areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");

  // console.log(normalize(str1));
  // console.log(normalize(str2));

  return normalize(str1) === normalize(str2);
};

// // Example usage
// console.log(areAnagrams("listen", "silent")); // Output: true
// console.log(areAnagrams("hello", "world")); // Output: false
// console.log(areAnagrams("triangle", "integral")); // Output: true

// -- find biggest number in array

const biggestNumberInArray = [1, 0, -3, 7, 6, 24];

const findBiggestNumber = () => {
  return biggestNumberInArray.sort((a, b) => b - a)[0];
};

// console.log(findBiggestNumber());

// -- return even numbers from array

const findEvenNumbersArray = [11, 12, 2, 3, 4, 5, 8, 9, 0];

const findEvenNumbers = () => {
  // findEvenNumbersArray.reduce((acc, total))

  let evenArray = [];

  for (let i = 0; i < findEvenNumbersArray.length; i++) {
    if (findEvenNumbersArray[i] % 2 === 0) {
      evenArray.push(findEvenNumbersArray[i]);
    }
  }
  return evenArray;
};

const evenNumbersReduce = () => {
  return findEvenNumbersArray.reduce((evenNumbers, num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
    return evenNumbers;
  }, []);
};

// console.log(findEvenNumbers());
// console.log(evenNumbersReduce());
