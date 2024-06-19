// Ex 1
const addressNumber = "5";
const addressStreet = "BenYehuda";
const country = "Israel";

const globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;

console.log(globalAddress);
document.getElementById('displayAddress').innerText = globalAddress;

/*----------------------------------------------------------*/

// Ex 2
const by = 1995;
const future = 2030;

const age = future - by;

console.log(age);

/*----------------------------------------------------------*/

// Ex 3
const pets = ["cat", "dog", "fish", "rabbit", "cow"];
console.log(pets[1]);

pets.splice(0, 1, "horse");
pets.push("horse");

pets.splice(3, 1)

console.log(pets);
console.log(pets.length);

/*----------------------------------------------------------*/

//Ex 4
const user = {
    userName: "John",
    password: "user1234",
  };

const database = [user];
console.log(database);

const newsfeed = [
    {userName: "John", timeline: "this is a string for timeline"},
    {userName: "Bill", timeline: "this is a string for timeline"},
    {userName: "Nancy", timeline: "this is a string for timeline"}
]
console.log(newsfeed);

/*----------------------------------------------------------*/

//Ex 5

/*let age = prompt("What is your age?");

age = Number(age);

if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (age > 18) {
    alert("Powering On. Enjoy the ride!");
} else {
    alert("Invalid input");
}*/

/*----------------------------------------------------------*/

//Ex 6
let output = [];

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        output.push(`${i} is even`);
    } else {
        output.push(`${i} is odd`);
    }
}

for(let i = 0; i < output.length; i++) {
    console.log(output[i]);
}

const outputDiv = document.getElementById('output');
for(let i = 0; i < output.length; i++) {
    const p = document.createElement('p');
    p.textContent = output[i];
    outputDiv.appendChild(p);
}

/*----------------------------------------------------------*/

// Ex 7
let values = [];

for (let i = 0; i < 5; i++) {
    let input = '';
    while (input === '') {
        input = prompt(`Enter name ${i + 1}:`);
        
        if (input === '') {
            alert("input cannot be empty");
        }
        if (!isNaN(input)) {
        input = Number(input);
    }
    values.push(input); // Add input to the array
    }
}
console.log("Array of values:", values);


for (let item of values) {
    if (typeof item !== 'string') {
        continue; 
    }
    if (item.charAt(0) !== item.charAt(0).toUpperCase()) {
        item = item.charAt(0).toUpperCase() + item.slice(1);
    }
    console.log("Name:", item);
}