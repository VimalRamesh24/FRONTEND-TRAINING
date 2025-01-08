//operator task-1
let num1 = Number(prompt("Enter Number One :" ));
let num2 = Number(prompt("Enter Number Two :" ));
//operations..
let Addition = num1 + num2;
let Substraction = num1 - num2;
let Multiplication = num1 * num2;
let Division = num1 / num2;
console.log(Addition);
console.log(Substraction);
console.log(Multiplication);
console.log(Division);

//task-2
// //logical condition 
let input1 = Number(prompt("Enter The Number :"));
if(input > 10 && input % 2==0 ){
    console.log("This Number satisfies two conditions");
}
else{
    console.log("This number not met two conditions")
}

//Task-3
let input2 = prompt("Enter A Number :");
let num3 = Number(input2);
(num3>0) ? console.log("PositiveNumber") :console.log("NegativeNumber");


//Task4
let input = prompt("Enter A Number");
let num4 = Number(input)
if(num4 %2==0)
{
    console.log("It is Even Number");
}
else
{
    console.log("It is Odd Number")
}

//Task5
function Grade(percentage) {
    switch (true) {
        case percentage >= 90:
            console.log("A Grade");
            break;

        case percentage >= 80:
            console.log("B Grade");
            break;

        case percentage >= 70:
            console.log("C Grade");
            break;

        case percentage < 70:
            console.log("F Grade");
            break;

        default:
            console.log("Invalid Input");
    }
}
let percentage = Number(prompt("Enter the percentage:")); 
Grade(percentage);

//Task6
let input5 = Number(prompt("Enter The Number"));
for(let i = 1;i<=10;i++)
{
    result = input5 * i;
    console.log(`${input5} * ${i} = ${result} `);
}

// Task7
let number6 = Math.abs(Number(prompt("Enter a number:")));
let count_1 = 0;
while (number6 !== 0) {
    number = Math.floor(number / 10);
    count_1++;
}
console.log(`The number of digits is: ${count_1}`);


//Dialog Box Tasks
//Task8
console.log(alert("Welcome to my website!"));

// //Task9
let userques = confirm("Do you want to continue?");
if (userques) {
    console.log("You chose to continue!");
} else {
    console.log("You canceled!");
}

//Task10
let age = prompt("Enter Your Age");
if(age>18)
{
    console.log("You are eligible!");
}
else{
    console.log("You are not eligible");
}

//Task11
let weight = prompt("Enter your weight in kg:");
let height = prompt("Enter your height in meters:");
let bmi = weight / (height * height);
alert("Your BMI is: " + bmi);

//Task12
let inputString1 = prompt("Enter a string:");
let reversedString1 = inputString.split('').reverse().join('');
alert("Reversed string is: " + reversedString);

//Task13
let inputString2 = prompt("Enter a string:");
let reversedString3 = inputString.split('').reverse().join('');
alert("Reversed string is: " + reversedString);

//Task14
let inputString3 = prompt("Enter a string:");
let vowels = "aeiouAEIOU";
let count = 0;
for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
        count++;
    }
}
alert("Number of vowels: " + count);

//Task15
let inputString4 = prompt("Enter a string:");
let reversedString = inputString.split('').reverse().join('');
let isPalindrome = (inputString === reversedString);
alert(isPalindrome);


Task16
let fullName = prompt("Enter your full name:");
let initials = fullName.split(" ").map(name => name[0].toUpperCase()).join(".");
alert(initials);

//Task17
let sentence4 = prompt("Enter a sentence:");
let wordToReplace = prompt("Enter the word you want to replace:");
let newWord = prompt("Enter the new word:");
let newSentence = sentence.replace(wordToReplace, newWord);
alert("New sentence: " + newSentence);


//Task18
function splitSentence(sentence) {
    let wordsArray = sentence.split(' ');
    return wordsArray;
}

//Task19
let sentence1 = "I love programming";
let wordToReplace2 = "programming";
let newWord3 = "JavaScript";

let updatedSentence = sentence.replace(wordToReplace2, newWord3);
console.log(updatedSentence);


//Task20
function countCharacterFrequency(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

//Task21
let inputString = "hello";
let character = 'l';
let result = countCharacterFrequency(inputString, character);
console.log(result);


