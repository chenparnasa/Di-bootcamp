// Daily Challenge: Not Bad
let sentence = "This dinner is not that bad! You cook well";
const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");
const numberOfChars = 3;

// Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad > wordNot) {
    let firstPart = sentence.substring(0, wordNot);
    let lastPart = sentence.substring(wordBad + numberOfChars); 
    let newSentence = firstPart + "good" + lastPart;
    
    console.log(newSentence);
} else {
    console.log(sentence);
}

/*----------------------------------------------------------*/

// Daily Challenge: Stars

// 1. One loop
for(let i = 1; i <= 6; i++) {
    console.log("*".repeat(i));
}

// 2. Two nested loops
for (let i = 1; i <= 6; i++) {
    let stars = "";

    for (let j = 0; j < i; j++) {
        stars += "*";
    }
    console.log(stars);
}

/*----------------------------------------------------------*/

// 3. Pyramid
let rows = prompt("How many rows?");
rows = Number(rows);

for (let i = 1; i <= rows; i++) {
    let stars = '';
        
    for (let j = 1; j <= rows - i; j++) {
        stars += ' ';
    }
        
    for (let k = 1; k <= 2 * i - 1; k++) {
        stars += '*';
    }
        
    console.log(stars);
}