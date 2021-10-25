// Create a helper function to count the words in a string
function getWordCountOfString(string) {
  // Split the given string between its spaces, and store each word in an array
  const splitStringArray = string.split(" ");
  // Record the length of the above array to get the word count of the original string
  const numberOfWordsInString = splitStringArray.length;
  // Return the number of words in the string
  return numberOfWordsInString;
}

function getAverageWordLength(array) {
  // Create an empty array to hold the word count for each item of a given array
  const wordCountPerItemArray = [];
  // Loop through each item in the original input array
  for (let i = 0; i < array.length; i++) {
    // Add the word count of the item at the current index to the word counting array
    wordCountPerItemArray.push(getWordCountOfString(array[i]));
  }
  // Create a variable to store the total number of words in the array
  let totalWordCount = 0;
  // Loop through each item of the word counting array
  for (let i = 0; i < wordCountPerItemArray.length; i++) {
    // Add up and store the count of all the words in the array
    totalWordCount += wordCountPerItemArray[i];
  }
  // Calculate the average number of words per item
  const averageNumberOfWordsPerItem =
    totalWordCount / wordCountPerItemArray.length;
  // Return the calculated average
  return averageNumberOfWordsPerItem;
}

// Create a test array to check answer
const testArray = [
  "J.R.R. Tokein",
  "Hideo Kojima",
  "Don Quixote de la Mancha",
];
// Check if the function works
console.log("Stretch 1: Average Word Length ", getAverageWordLength(testArray));