    // Task 1, Checks Odd or Even
    function checkEvenOddNumber(value) {
    if (value % 2 === 0) {
        console.log(value + " is Even");
    } else {
        console.log(value + " is Odd");
    }
    }
    checkEvenOddNumber(15);
    checkEvenOddNumber(16);
    
    // Task 2, Print upto 10
    for (let num = 1; num <= 10; num++) {
    console.log(num);
    }
    
    // Task 3: Multiples of a number
    function printNumberMultiples(number) {
        for (let i = 1; i <= 30; i++) {
          console.log(number * i);
        }
    }  
    let inputValue = 3;
    printNumberMultiples(inputValue);
    
     // Task 4, Check primeNo
    function isPrimeNo(number) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
    }
    return isPrime;
    }
    console.log(isPrimeNo(6));  
    console.log(isPrimeNo(13));  
    
     // Task 5, Calc Sum Of Num
    let totalSum = 0;
    for (let num = 1; num <= 100; num++) {
    totalSum += num;
    }
    console.log(totalSum);
    
     // Task 6, Finds Largest one
    let numbersArr = [4,5,6,8,9];
    let largestNo = numbersArr[0];
    for (let index = 1; index < numbersArr.length; index++) {
    if (numbersArr[index] > largestNo) {
        largestNo = numbersArr[index];
    }
    }
    console.log(largestNo);
    
    // Task 7, Count Vowels in str
    function countVowelLetters(inputString) {
    let vowelCount = 0;
    let vowelsList = ['a', 'e', 'i', 'o', 'u'];
    for (let index = 0; index < inputString.length; index++) {
    if (vowelsList.includes(inputString[index].toLowerCase())) {
        vowelCount++;
    }
    }
    return vowelCount;
    }
    console.log(countVowelLetters("Hello World"));

     // Task 8, star pattern
    function printStarPattern(rows) {
    for (let row = 1; row <= rows; row++) {
        let starLine = "";
        for (let col = 1; col <= row; col++) {
        starLine += "*";
    }
    console.log(starLine);
    }
    }
    printStarPattern(5);
    
    // Task 9, FizzBuzz
    for (let num = 1; num <= 50; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    }

    // Task 10, Reverse  Str
    function reverseInputStr(inputStr) {
    let reversedStr = "";
    for (let index = inputStr.length - 1; index >= 0; index--) {
        reversedStr += inputStr[index];
    }
    return reversedStr;
    }
    console.log(reverseInputStr("hello"));
