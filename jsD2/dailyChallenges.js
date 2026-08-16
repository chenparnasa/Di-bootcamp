
const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

// The words from the last submitted form, so the shuffle button can reuse them
let words = null;

function buildStories({ noun, adjective, person, verb, place }) {
    return [
        `${person} ${verb} to the ${adjective} ${noun} in ${place}.`,
        `${noun} ${verb} ${person} ${adjective} in ${place}.`,
        `${person} ${verb} ${adjective} ${noun} ${place}.`
    ];
}

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        if (!noun || !adjective || !person || !verb || !place) {
            alert('Please fill in all fields.');
            return;
        }

        words = { noun, adjective, person, verb, place };

        storySpan.textContent = buildStories(words)[0];
    });

    shuffleButton.addEventListener('click', function() {
        if (!words) {
            alert('Please fill in the form first.');
            return;
        }

        const stories = buildStories(words);

        const randomIndex = Math.floor(Math.random() * stories.length);
        storySpan.textContent = stories[randomIndex];
    });

