//Exercise 5: Find the Largest Number in an Array
//Write a function findLargest that takes an array of numbers and returns the largest number.

function findLargest(arr) {
 
 let largest = arr[0];

 for(let i = 1; i < arr.length; i ++)
    {
        if(arr[i] > largest)
            largest = arr[i];
    }
    return largest;
}

console.log(findLargest([1, 2, 3, 4, 5])); // 5
console.log(findLargest([-1, -2, -3, -4])); // -1