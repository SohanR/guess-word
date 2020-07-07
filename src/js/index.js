const word = document.getElementById('word');
const wrongLetter = document.getElementById('wrong-letter');
const playButton = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');


const figurParts = document.querySelectorAll('.figure-part');

const words = ['place', 'fear', 'amazing', 'purple', 'flagrant', 'judge', 'equal', 'mate', 'flame', 'wakeful'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];



//display word

function displayWord() {
    word.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                letter => `
                    <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                    </span>
                `
            )
            .join('')
        }
    `;

    const innerWord = word.innerText.replace(/\n/g, '')

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won!';
        popup.style.display = 'flex';
    }

}

function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}



//wrong letters

function updateWrongLetters() {

    wrongLetter.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}        
    `;

    //display parts

    figurParts.forEach((part, index) => {
        const error = wrongLetters.length;

        if (index < error) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    //check lost

    if (wrongLetters.length === figurParts.length) {
        finalMessage.innerText = 'You have been execution!';
        popup.style.display = 'flex';
    }

}


//input letter

window.addEventListener('keydown', e => {

    if (e.keyCode >= 65 & e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLetters();
            } else {
                showNotification();
            }
        }
    }

});







displayWord();