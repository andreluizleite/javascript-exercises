//Exercise 7: Sum of Digits
//Write a function sumOfDigits that takes a number and returns the sum of its digits.

function sumOfDigits(num) {
    
    let numStr = num.toString();
    let sum = 0;
    numStr.split('').forEach(element => {
        sum += parseInt(element)
    });
    return sum;
}

console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(456)); // 15