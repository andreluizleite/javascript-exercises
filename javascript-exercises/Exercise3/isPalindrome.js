//Exercise 3: Palindrome Checker
//Write a function isPalindrome that checks if a given string is a palindrome (reads the same forward and backward).

function isPalindrome(str) {
    var invert = str.split("").reverse().join('');

    if(invert === str)
        return true;
    else return false;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false