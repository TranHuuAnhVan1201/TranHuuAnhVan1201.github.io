const main = document.querySelector('main');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const readBtn = document.getElementById('read');
const textarea = document.getElementById('textarea');
const voicesSelect = document.getElementById('voices');

// 1. Show and hide textarea.

toggleBtn.addEventListener('click', function () {
    document.getElementById('text-box').classList.toggle('show');
});
closeBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.remove('show');
});

// 2. Data
const data = [
  {
    image: './img/drink.jpg',
    text: "I'm Thirsty",
    link: "https://google.com"
  },
  {
    image: './img/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './img/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './img/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];

// 3. Create data
data.forEach(createBox);

// 3. Create speech boxes
function createBox(item) {
  const box = document.createElement('div');

  const { image, text } = item;

  box.classList.add('box');

  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });

  main.appendChild(box);
}


// 4. Init speech synth
const message = new SpeechSynthesisUtterance();

// 4. Set text
function setTextMessage(text) {
    message.text = text;
};

// 4. Speak text.
function speakText() {
    speechSynthesis.speak(message);
};

// 5. Set voices

// 5.1 Store voices
let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voicesSelect.appendChild(option);
    })
} 

// 5.2 Set voice 
function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
};

// 5.3 Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);
// 5.4 Change voice
voicesSelect.addEventListener('change', setVoice);

// 5.5 Read text button.
readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakText();
});
getVoices()