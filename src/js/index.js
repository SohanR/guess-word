const word = document.getElementById('word');
const wrongLetter = document.getElementById('wrong-letter');
const playButton = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');


const figurParts = document.querySelectorAll('.figure-part');

const words = ['place', 'fear', 'amazing', 'purple', 'flagrant', 'judge', 'equal', 'mate', 'flame', 'wakeful'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['p', 'l', 'a', 'c', 'e'];
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
        finalMessage.innerText = 'Congratulation! You Won!';
        popup.style.display = 'flex';
    }

}

displayWord();