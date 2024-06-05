//Exercise 10: Find the Factorial of a Number
//Write a function factorial that takes a number and returns its factorial.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }


}

console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040