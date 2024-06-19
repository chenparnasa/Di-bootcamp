
const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

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

        const generatedStory = `${person} ${verb} to the ${adjective} ${noun} in ${place}.`;

        storySpan.textContent = generatedStory;
    });

    shuffleButton.addEventListener('click', function() {
        const stories = [
            `${person} ${verb} to the ${adjective} ${noun} in ${place}.`,
            `${noun} ${verb} ${person} ${adjective} in ${place}.`,
            `${person} ${verb} ${adjective} ${noun} ${place}.`
        ];

        const randomIndex = Math.floor(Math.random() * stories.length);
        storySpan.textContent = stories[randomIndex];
    });

