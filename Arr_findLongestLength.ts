/*
Find the longest element in the array
Input: array["Ha","Hoa","Minh","Hue","Lan","Binh"]
Output: array["Minh","Binh"]
*/

function findLongestLength01(arr: string[]) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }
  let maxLength: number = 0;
  let newArr: string[] = [];
  maxLength = Math.max(...arr.map((elm) => elm.length));
  newArr = arr.filter((elm) => elm.length === maxLength);
  console.log("Array with the longest element", newArr);
}

//Valid case
findLongestLength01([
  "Ha",
  "Hoa",
  "Minh",
  "Hue",
  "Jason",
  "Hoa",
  "Lan",
  "Hue",
  "Minh",
  "Hue",
]);
findLongestLength01(["Ha", "Hoa", "Minh", "Hue", "Lan", "Binh"]);

//Invalid case
findLongestLength01([]);
