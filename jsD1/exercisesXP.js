// Exercises XP
// Exercise 1: List Of People

// 1. Remove "Greg" from the people array
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1)

// 2. Replace "James" with "Jason"
const indexToReplace = people.indexOf("James");
if (indexToReplace !== -1) {
    people[indexToReplace] = "Jason";
}

// 3. Add my name to the end of the people array
const myName = "Chen"; 
people.push(myName);

// 4. Console.log Mary's index
const maryIndex = people.indexOf("Mary");
console.log(`Mary's index is: ${maryIndex}`);

// console.log(people);

// 5. Make a copy of the people array using the slice method
const copyOfPeople = people.slice(1,3);
console.log(copyOfPeople);

// 6. Find the index of "Foo" in the people array
const indexOfFoo = people.indexOf("Foo"); // returns -1 because there is no such item in the array
console.log(indexOfFoo);

// 7. Get the last element of the array
const last = people[people.length - 1];
console.log("The last element of the array is:", last);

// 8. Iterate through the people array and console.log each person
for(let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 9. Iterate through the people array and and exit the loop after you console.log “Devon”
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}


// Exercise 2: Your Favorite Colors
const colors = ["white", "blue", "mint", "purple", "pink"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

for (let i = 0; i < colors.length; i++) {
    let suffixes = [];
    if (i === 0) {
        suffixes = "st";
    } else if (i === 1) {
        suffixes = "nd";
    } else if (i === 2) {
        suffixes = "rd";
    } else {
        suffixes = "th";
    }
    console.log(`My ${i + 1}${suffixes} choice is ${colors[i]}`);
}


// Exercise 3: Repeat The Question
let userInput = prompt("Please enter a number:");
let number = Number(userInput);

if (typeof number !== 'number' || isNaN(number)) {
    console.log("Invalid number. Please try again.");
} else {

    while (number < 10) {
        userInput = prompt("Number is smaller than 10. Please enter a new number:");
        number = Number(userInput); 
    }

    console.log(`The number ${number} is bigger than 10.`);
}


// Exercise 4: Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        Sarah: [3, 990],
        Dan:  [4, 1000],
        David: [1, 500],
    },
}

// 2. Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// 3. Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
const secondTenant = building.nameOfTenants[1];
const roomsOfSecondTenant = building.numberOfRoomsAndRent[secondTenant][0];

console.log(`Name of the second tenant: ${secondTenant}`);
console.log(`Number of rooms ${secondTenant} has: ${roomsOfSecondTenant}`);

// 5.Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent["Sarah"][1];
const davidRent = building.numberOfRoomsAndRent["David"][1];
const danRent = building.numberOfRoomsAndRent["Dan"][1];

const sumSarahDavidRent = sarahRent + davidRent;

if (sumSarahDavidRent > danRent) {
    building.numberOfRoomsAndRent["Dan"][1] = 1200;
    console.log(`Dan's rent has been increased to 1200.`);
} else {
    console.log(`The sum of Sarah's and David's rent is not bigger than Dan's rent.`);
}

console.log(building.numberOfRoomsAndRent);


// Exercise 5: Family
// 1. Create an object called family with a few key value pairs.
const family = {
    father: "John",
    mother: "Jane",
    son: "Michael",
    daughter: "Emily",
};

// 2. Using a for in loop, console.log the keys of the object.
console.log("Keys of the family object:");
for (let key in family) {
    console.log(key);
}

// 3. Using a for in loop, console.log the values of the object.
console.log("\nValues of the family object:");
for (let key in family) {
    console.log(family[key]);
}


// Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }

  let phrase = '';

  for (let key in details) {
      phrase += key + ' ';
      phrase += details[key] + ' ';
  }

  console.log(phrase);


// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const firstLetters = [];

for (let i = 0; i < names.length; i++) {
    firstLetters.push(names[i].charAt(0));
}

firstLetters.sort();
const secretSociety = firstLetters.join('');

console.log(secretSociety);

// without sort
/*let secretSociety = '';

for (let i = 0; i < names.length; i++) {
    const firstLetter = names[i].charAt(0);

    let inserted = false;
    for (let j = 0; j < secretSociety.length; j++) {
        if (firstLetter < secretSociety[j]) {
            secretSociety = secretSociety.slice(0, j) + firstLetter + secretSociety.slice(j);
            inserted = true;
            break;
        }
    }

    if (!inserted) {
        secretSociety += firstLetter;
    }
}

console.log(secretSociety);*/