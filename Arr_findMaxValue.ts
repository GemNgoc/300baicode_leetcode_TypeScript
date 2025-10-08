/*
find the max value in an array
Input: arr["1","7896","1234","45"]
Output: "7896"
*/

function findMaxValue01(arr: string[]) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }
  let maxValue = Math.max(...arr.map(Number));
  console.log("Max value: ", maxValue);
}

// Valid case
let arr2: string[] = ["1", "7896", "1234", "45"];
let arr3: string[] = ["1", "1234", "1234", "45"];
findMaxValue01(arr2);
findMaxValue01(arr3);

// Invalid case
findMaxValue01([]);
