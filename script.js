const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const submitPassword = document.getElementById('submit-password');
const message = document.getElementById('message');

const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const music = document.getElementById('bg-music');
const nextPageBtn = document.getElementById('next-page-btn');

const correctPassword = "long";

let attempt = 0;

// Password Checking
submitPassword.addEventListener('click', () => {
  const enteredPassword = passwordInput.value.trim();
  if (enteredPassword === correctPassword) {
    passwordScreen.style.display = 'none';
    mainContent.style.display = 'block';
    music.play();
  } else {
    attempt++;
    if (attempt === 1) {
      message.innerHTML = "First try! Keep going 💖";
    } else if (attempt === 2) {
      message.innerHTML = "Almost there my love... remember our magic number ✨";
    } else if (attempt >= 3) {
      message.innerHTML = "I'm right here baby 💖 Try again slowly 🥺";
    }
    passwordInput.value = "";
  }
});

// Typing Letter Content
const letterParagraph = document.querySelector('.letter p');

// Letter content
const letterContent = `
From the moment you smiled at me,
I knew my world had changed forever... 💖

Every second with you is a treasure,
every heartbeat calls your name... 🎶

On your special day, my Jiya,
I wish you oceans of happiness,
endless love, and dreams fulfilled... 🎂🌟

You are my sunshine, my soulmate, my forever girl. ❤️

Happy Birthday, my Queen.
I love you more than words can ever say... 💖💍
`;

// Typewriter Effect
function typeLetter(text, element, speed = 50, callback) {
  let index = 0;
  function type() {
    if (index < text.length) {
      const char = text.charAt(index);
      element.innerHTML += (char === '\n') ? '<br>' : char;
      index++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

// Open Letter
envelope.addEventListener('click', () => {
  envelope.style.display = 'none';
  letter.style.display = 'block';
  letterParagraph.innerHTML = "";
  typeLetter(letterContent, letterParagraph, 50, () => {
    // After typing complete, show heart button
    nextPageBtn.style.display = 'block';
  });
});

// Go to Next Page
function goToNextPage() {
  window.location.href = "treasure_hunt.html"; // Change this to your next page URL
}


// for flowers for jiya 

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};