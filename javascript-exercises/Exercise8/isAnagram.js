//Exercise 8: Anagram Checker
//Write a function isAnagram that takes two strings and checks if they are anagrams (contain the same characters in a different order).

function isAnagram(str1, str2) {
    
    let sort1 = str1.split('').sort().join('');
    let sort2 = str2.split('').sort().join('');

    return sort1 === sort2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false