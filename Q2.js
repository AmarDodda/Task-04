//Q2.)Do the below programs in arrow functions.

//a.)Print odd numbers in an array:

const printOddNumbers = (arr) => {
    arr.some((num) => {
        if (num % 2 !== 0) {
            console.log(num);
            return false; // Stop iterating after finding the first odd number
        }
    });
};

printOddNumbers([23, 36, 33, 38, 47]);


//b.)Convert all the strings to title caps in a string array:

const titleCaps = (arr) => {
    const result = [];
    arr.some((word) => {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        result.push(capitalizedWord);
    });
    console.log(result);
};

titleCaps(["guvi", "function", "march"]);


//c.)Sum of all numbers in an array:

const sumArray = (arr) => {
    let sum = 0;
    arr.some((num) => {
        sum += num;
    });
    console.log(sum);
};

sumArray([23, 45, 25, 68, 99]);


//d.)Return all the prime numbers in an array:

const isPrime = (num) => {
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

const getPrimeNumbers = (arr) => {
    const primes = [];
    arr.some((num) => {
        if (isPrime(num)) {
            primes.push(num);
        }
    });
    console.log(primes);
};

getPrimeNumbers([12, 13, 14, 15, 16, 17, 18, 19]);

//e.)Return all the palindromes in an array:

const isPalindrome = (str) => {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

const getPalindromes = (arr) => {
    const palindromes = [];
    arr.some((word) => {
        if (isPalindrome(word)) {
            palindromes.push(word);
        }
    });
    console.log(palindromes);
};

getPalindromes(["radar", "cool", "party", "eve"]);

