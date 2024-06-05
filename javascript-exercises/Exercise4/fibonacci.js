//Exercise 4: Fibonacci Sequence
//Write a function fibonacci that returns an array containing the first n numbers of the Fibonacci sequence.

function fibonacci(n) {
    
    let sequence = [0,1];
    for(let i =1; i < n; i++)
        {
            sequence.push(sequence[i] + sequence[i - 1]);
        }

        return sequence.slice(0, n);
}

console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(1)); // [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]