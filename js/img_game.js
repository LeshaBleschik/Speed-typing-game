let time = 5;
let timer;
let score = 0;
const seconds = document.querySelector('#seconds');
const start = document.querySelector('#start');
const randomImg = document.querySelector('#randomImg');
const typedWord = document.querySelector('#typedWord');
const typingResult = document.querySelector('#typingResult');
const timeLeft = document.querySelector('#timeLeft');
const scoreDisplay = document.querySelector('#scoreDisplay');
const hiddenWord = document.querySelector('#hiddenWord');
const success = document.querySelector('#success');
const error = document.querySelector('#error');
const clock = document.querySelector('#clock');
const rulesTitle = document.querySelector('#rules-title');
const rulesContent = document.querySelector('.rules-content');

const imgGalery = [
  {
    img: 'images/newspaper.jpg',
    name: 'газета',
  },
  {
    img: 'images/house.jpg',
    name: 'дом',
  },
  {
    img: 'images/eye.jpg',
    name: 'глаз',
  },
  {
    img: 'images/book.jpg',
    name: 'книга',
  },
  {
    img: 'images/ring.jpg',
    name: 'кольцо',
  },
  {
    img: 'images/hammer.jpg',
    name: 'молоток',
  },
  {
    img: 'images/tramvay.jpg',
    name: 'трамвай',
  },
  {
    img: 'images/tree.jpg',
    name: 'дерево',
  },
  {
    img: 'images/traktor.jpg',
    name: 'трактор',
  },
  {
    img: 'images/boat.jpeg',
    name: 'лодка',
  },
  {
    img: 'images/window.png',
    name: 'окно',
  },
  {
    img: 'images/cup.jpg',
    name: 'кружка',
  },
  {
    img: 'images/fish.jpg',
    name: 'рыба',
  },
  {
    img: 'images/laptop.jpeg',
    name: 'ноутбук',
  },
  {
    img: 'images/molniya.jpg',
    name: 'молния',
  },
  {
    img: 'images/wave.jpg',
    name: 'волна',
  },
  {
    img: 'images/sun.jpg',
    name: 'солнце',
  },
  {
    img: 'images/beard.jpg',
    name: 'борода',
  },
  {
    img: 'images/gift.jpg',
    name: 'подарок',
  },
  {
    img: 'images/tort.jpg',
    name: 'торт',
  },
];

start.addEventListener('click', function () {
  start.disabled = true;
  clock.play();
  start.innerHTML = 'Начать игру!';
  time = +seconds.innerHTML;
  hiddenWord.style.display = 'none';
  score = 0;
  scoreDisplay.innerHTML = score;
  typingResult.innerHTML = '';
  startCountDown();
  typedWord.focus();
  showPic();
  typedWord.addEventListener('input', checkWords);
});

function showPic() {
  let randIndex = Math.floor(Math.random() * imgGalery.length);
  randomImg.src = imgGalery[randIndex].img;
  hiddenWord.innerHTML = imgGalery[randIndex].name;
}

function startCountDown() {
  timer = setInterval(countDown, 1000);
}

function countDown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    gameFinish();
  }
  timeLeft.innerHTML = time;
}

function gameFinish() {
  typingResult.innerHTML = 'Игра окончена.';
  typingResult.style.color = 'red';
  start.innerHTML = 'Начать заново!';
  clock.pause();
  start.disabled = false;
  error.play();
  clearInterval(timer);
  typedWord.value = '';
  hiddenWord.style.display = 'block';
}

function checkWords() {
  if (typedWord.value === hiddenWord.innerHTML) {
    success.play();
    typingResult.innerHTML = 'Верно!';
    typingResult.style.color = 'green';
    scoreDisplay.innerHTML = ++score;
    typedWord.value = '';
    showPic();
    time = 6;
  }
}

rulesTitle.addEventListener('click', function () {
  rulesContent.classList.toggle('show');
});
