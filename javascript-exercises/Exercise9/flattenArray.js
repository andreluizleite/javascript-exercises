//Exercise 9: Flatten a Nested Array
//Write a function flattenArray that takes a nested array and returns a flat array.

function flattenArray(arr) {
    return arr.reduce((flatArray, currentItem) => {
        // If the current item is an array, recursively flatten it
        // Otherwise, push it to the flatArray
        return flatArray.concat(Array.isArray(currentItem) ? flattenArray(currentItem) : currentItem);
    }, []);
}

console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, 3], 4])); // Output: [1, 2, 3, 4]
