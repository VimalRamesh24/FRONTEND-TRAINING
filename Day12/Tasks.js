(1)
// Task1 - finding largest word in sentence
let inputStr1 = prompt("Enter the string");
let words1 = inputStr.split(" ");
let largeWord = words[0];
for (let i = 1; i < words.length; i++) {
    if (words[i].length > largeWord.length) {
        largeWord = words[i];
    }
    return largeWord;
}
console.log("Largest Word :", largeWord);

(2)
//Task2
let InputStr2 = String(prompt("Enter a sentence:"));
let words2 = InputStr2.split(" ");
let WordsSet = new Set();
let result2 = [];
for (let i = 0; i < words2.length; i++) {
    let word = words2[i];
    if (word.charAt(0).toUpperCase() === word.charAt(0)) {
        if (WordsSet.has(word)) {
            result.push("CHANGED");
        } else {
            WordsSet.add(word);
            result.push(word);
        }
    } else {
        result.push(word);
    }
}
let output = result.join(" ");
console.log("New Sentence:", output);

(3)
// task3
let inputStr3 = prompt("Enter a sentence:");
let words = inputStr.split(" ");
for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
        words[i] = "EVEN";
    }
}
let result = words.join(" ");
console.log(result);


(4)
//task4
let inputStr4 = prompt("Enter a string:");
let result4 = "";
for (let i = 0; i < inputStr4.length; i++) {
    if (result4.indexOf(inputStr[i]) === -1) {
        result4 += inputStr[i];
    }
}
console.log(result4);
