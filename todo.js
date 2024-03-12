//Q1.)Do the below programs in anonymous function & IIFE

//a.) Print odd numbers in an array

// Anonymous Function

const printOddNumbers = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};

printOddNumbers([1, 2, 3, 4, 5]);


// IIFE
(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5]);



//b.)Convert all the strings to title caps in a string array

// Anonymous Function
const titleCaps = function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
    console.log(result);
};

titleCaps(["hello", "world", "javascript"]);


// IIFE
(function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
    console.log(result);
})(["hello", "world", "javascript"]);



//c.)Sum of all numbers in an array

// Anonymous Function
const sumArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
};

sumArray([1, 2, 3, 4, 5]);


// IIFE
(function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})([1, 2, 3, 4, 5]);


//d.)Return all the prime numbers in an array:

// Anonymous Function
const isPrime = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const getPrimeNumbers = function(arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    console.log(primes);
};

getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// IIFE
(function(arr) {
    const isPrime = function(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    console.log(primes);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);



//e.)Return all the palindromes in an array:

// Anonymous Function
const isPalindrome = function(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

const getPalindromes = function(arr) {
    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }
    console.log(palindromes);
};

getPalindromes(["level", "hello", "noon", "world"]);


// IIFE
(function(arr) {
    const isPalindrome = function(str) {
        const len = str.length;
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }
    console.log(palindromes);
})(["level", "noon", "world"]);



//f.) Return median of two sorted arrays of the same size:

// Anonymous Function
const medianOfArrays = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const midIndex = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
        return mergedArray[midIndex];
    }
};

console.log(medianOfArrays([1, 3, 5], [2, 4, 6]));


// IIFE
(function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const midIndex = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
        console.log((mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2);
    } else {
        console.log(mergedArray[midIndex]);
    }
})([1, 3, 5], [2, 4, 6]);



//g.)Remove duplicates from an array:

// Anonymous Function
const removeDuplicates = function(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    console.log(uniqueArray);
};

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// IIFE
(function(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);



//h.)Rotate an array by k times:

// Anonymous Function
const rotateArray = function(arr, k) {
    const len = arr.length;
    k = k % len;
    const rotatedArray = [];
    for (let i = 0; i < len; i++) {
        const newIndex = (i + k) % len;
        rotatedArray[newIndex] = arr[i];
    }
    console.log(rotatedArray);
};

rotateArray([1, 2, 3, 4, 5], 2);


// IIFE
(function(arr, k) {
    const len = arr.length;
    k = k % len;
    const rotatedArray = [];
    for (let i = 0; i < len; i++) {
        const newIndex = (i + k) % len;
        rotatedArray[newIndex] = arr[i];
    }
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);





