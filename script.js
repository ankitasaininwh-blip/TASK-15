// Array
const numbers = [4, 8, 2, 11, 6, 7, 10];

console.log("Array:", numbers);


// 1. Arrow function - Find maximum number
const findMaximum = (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
};


// 2. Anonymous function - Calculate sum
const calculateSum = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};


// 3. Normal function - Count odd numbers
function countOddNumbers(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
}


// Display results
console.log("Maximum number:", findMaximum(numbers));
console.log("Sum of all elements:", calculateSum(numbers));
console.log("Count of odd numbers:", countOddNumbers(numbers));