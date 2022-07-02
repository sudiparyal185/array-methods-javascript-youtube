const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * .map()
 * Loop over the elements in an array and returns the aray
 */
let newArray = tempArray.map((element) => element * 2);

/**
 * .forEach()
 * Similar to map but returns undefined
 */
newArray = tempArray.forEach((element) => element * 2);

/**
 * .filter()
 * Returns new array with elements passing the filter criteria
 */
newArray = tempArray.filter((element) => element % 2 === 0 && element > 5);

/**
 * .sort()
 * Sorts the item within an array and returns the new array
 * on comparator returns -1 if first item is greater than second
 */
//Sorting by asc
newArray = tempArray.sort((a, b) => (a > b ? 1 : -1));

/**
 * .reduce()
 * It returns a single value after some sort of operation within an array elements
 */
newArray = tempArray.reduce((a, b) => a + b, 0);
/**
 * .join()
 * Returns a string by concatenating the items within an array based on separator provided
 */
newArray = tempArray.join(".");

/**
 * .includes()
 * Returns true if the provided item is in the array, false otherwise
 */
newArray = tempArray.includes(100);
/**
 * .find()
 * Search the provide item within an array and returns it
 * Note:Even though there are multiple elements matching the condition it will only return
 * the first occurence
 */
newArray = tempArray.find((element) => element % 2 === 0 && element > 5);
/**
 * .every()
 * Checks all the items in an array and returns true if the condition is matched
 */
newArray = tempArray.every((element) => element % 2 === 0);

/**
 * .concat()
 * Returns new array by merging two arrays
 */
newArray = tempArray.concat([11, 12, 13, 14]);
/**
 * .some()
 * Checks if one the element within an array passes the required condition
 */
newArray = tempArray.some((element) => element === 10);
/**
 * .findIndex()
 * Returns the index of first element which passes the provided test
 */
newArray = tempArray.findIndex((element) => element % 2 === 0);

/**
 * .indexOf()
 * Returns the index of first element
 */
newArray = tempArray.indexOf(5);
/**
 * .fill()
 * fills the item within an array and returns the modified array
 */
newArray = new Array(10);
newArray = newArray.fill(100);
/**
 * .slice()
 * Retuns a new array from previous one based on specified range
 */
newArray = tempArray.slice(0, 5);
/**
 * .reverse()
 * Reverses the items within an array and returns a new array
 */
newArray = tempArray.reverse();
/**
 * .push()
 * It adds the passed item to the end of an array
 */
tempArray.push(100);
newArray = tempArray;
/**
 * .pop()
 * Removes the last item from an array
 */
tempArray.pop();
newArray = tempArray;
/**
 * .shift()
 * Removes the first element from an array
 */
tempArray.shift();
newArray = tempArray;
/**
 * .unshift()
 * It adds the item to the beginning of an array
 */
tempArray.unshift(1000);
newArray = tempArray;

console.log(newArray);
