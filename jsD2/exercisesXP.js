// Exercise 1: Change The Article
// 1.Using a DOM property, retrieve the h1 and console.log it
/*const articleElement = document.querySelector('article');

if (articleElement) {
    const h1Element = articleElement.getElementsByTagName('h1')[0];

    if (h1Element) {
        const h1Text = h1Element.textContent;
        console.log(h1Text);

    } else {
        console.error('The <h1> element inside <article> was not found.');
    }
} else {
    console.error('The <article> element was not found.');
}*/


// 2.Using DOM methods, remove the last paragraph in the <article> tag
/*if (articleElement) {
    const paragraphs = articleElement.getElementsByTagName('p');
    
    if (paragraphs.length > 0) {
        const lastParagraph = paragraphs[paragraphs.length - 1];
        lastParagraph.remove();
        console.log('Last paragraph removed successfully.');

    } else {
        console.error('No <p> elements found inside <article>.');
    }
} else {
    console.error('The <article> element was not found.');
}*/


// 3. Change the background color of the h2 to red, when it’s clicked on
/*const h2Element = articleElement.getElementsByTagName('h2')[0];

if (h2Element) {
    h2Element.addEventListener('click', function() {
        h2Element.style.backgroundColor = 'red';
    });

} else {
    console.error('The <h2> element was not found.');
}*/


// 4. Hide the h3 when it’s clicked on
/*const h3Element = articleElement.getElementsByTagName('h3')[0];

if (h3Element) {
    h3Element.addEventListener('click', function() {
        h3Element.style.display = 'none';
    });

} else {
    console.error('The <h3> element was not found.');
}*/


// 5. Make all paragraphs bold when the button is clicked
const buttonElement = document.getElementById('bold');

if (buttonElement) {
    buttonElement.addEventListener('click', function() {
        const paragraphs = articleElement.getElementsByTagName('p');

        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.fontWeight = 'bold';
        }
    });

} else {
    console.error('The <button> element was not found.');
}


// 6. Set the font size of h1 to a random pixel size between 0 to 100 on hover
/*const h1Element = document.getElementById('changeSizeOnHover');

h1Element.addEventListener('mouseover', function() {
    const randomFontSize = Math.floor(Math.random() * 101);
    h1Element.style.fontSize = randomFontSize + 'px';
});

h1Element.addEventListener('mouseout', function() {
    h1Element.style.fontSize = '';
});*/


// 7. Fade out the second paragraph on hover
/*const secondParagraph = document.getElementsByTagName('p')[1];

secondParagraph.addEventListener('mouseover', function() {
    secondParagraph.classList.add('fade-out');
});

secondParagraph.addEventListener('mouseout', function() {
    secondParagraph.classList.remove('fade-out');
});*/


/*--------------------------------------------------------------*/

// Exercise 2 : Work With Forms
// 1. Retrieve the form and console.log it
/*const formElement = document.querySelector('form');
console.log(formElement);*/

// 2. Retrieve the inputs by their ID and console.log it
/*const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
console.log(firstName);
console.log(lastName);*/

// 3. Retrieve the inputs by their name and console.log it
/*const fName = document.getElementsByName('firstname');
const lName = document.getElementsByName('lastname');
console.log(fName);
console.log(lName);*/

// 2. Retrieve the inputs by their ID and console.log it
/*formElement.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting in default
    
    const usersAnswerList = document.querySelector('.usersAnswer');
    const fnameValue = document.getElementById('fname').value;
    const lnameValue = document.getElementById('lname').value;

    console.log('First Name:', fnameValue);
    console.log('Last Name:', lnameValue);

    if (fnameValue !== '' && lnameValue !== '') {
        const firstnameLi = document.createElement('li');
        const lastnameLi = document.createElement('li');

        firstnameLi.textContent = `First Name: ${fnameValue}`;
        lastnameLi.textContent = `Last Name: ${lnameValue}`;

        usersAnswerList.appendChild(firstnameLi);
        usersAnswerList.appendChild(lastnameLi);

        console.log(usersAnswerList);

        // Clear form fields
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';

    } else {
        alert('Please enter both first name and last name.');
    }
});*/


// Exercise 3 : Transform The Sentence
let allBoldItems;

function getBoldItems() {
    allBoldItems = document.getElementsByTagName('strong');
    return allBoldItems;
}

function highlight() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'blue';
    }
}

function returnItemsToDefault() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'black';
    }
}

const paragraph = document.querySelector('p'); 
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);

getBoldItems();


// Exercice 4 : Volume Of A Sphere
const form = document.getElementById('MyForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const radius = parseFloat(document.getElementById('radius').value);
    const volume = (4/3) * Math.PI * Math.pow(radius, 3); // Formula: (4/3) * π * r^3

    document.getElementById('volume').value = volume.toFixed(4); // Four decimal places
});








