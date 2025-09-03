// Automatic changing background in every 2 second .
const images = [
  "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg",
  "https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg",
  "https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg",
  "https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg"
];

let currentIndex = 0;
const body = document.body;
let intervalId = null; // <<--- Store interval ID

function changeBackground() {
  body.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

document.querySelector('#start').addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(changeBackground, 2000);
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});





