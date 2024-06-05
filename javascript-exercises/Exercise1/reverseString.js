/* Exercise 1: Reverse a String
Write a function reverseString that takes a string and returns the string in reverse order.
*/

function reverseString(str) {
    return str.split("").reverse().join('');
}

console.log(reverseString("hello")); // "olle"
console.log(reverseString("world")); // "dlrow"