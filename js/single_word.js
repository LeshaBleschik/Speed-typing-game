let time;
let currentLevel;
let score = 0;
let timer;
let prepCountDown = 3;
const allButtons = document.querySelectorAll('.button');
const success = document.querySelector('#success');
const error = document.querySelector('#error');
const clockSound = document.querySelector('#clockSound');
const seconds = document.querySelector('.seconds');
const start = document.querySelector('.start');
const randomWord = document.querySelector('.randomWord');
const typedWord = document.querySelector('.typedWord');
const typingResult = document.querySelector('.typingResult');
const timeLeft = document.querySelector('.timeLeft');
const scoreDisplay = document.querySelector('.scoreDisplay');
const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');
const secondWord = document.querySelector('.secondWord');
const rulesTitle = document.querySelector('.rules-title');
const rulesContent = document.querySelector('.rules-content');
const prepeareTimer = document.querySelector('.countTimer');
const prepeareMessage = document.querySelector('.prepeare');

const words = [
  'пальма',
  'дорога',
  'машина',
  'космос',
  'печаль',
  'петух',
  'радуга',
  'лицо',
  'приветствие',
  'желатин',
  'кабель',
  'карантин',
  'свойство',
  'критерий',
  'майонез',
  'атлантика',
  'лоджия',
  'караван',
  'холдинг',
  'кинокамера',
  'парковка',
  'брусника',
  'изверг',
  'ежевика',
  'автовокзал',
  'бабник',
  'корректор',
  'магнезия',
  'вакса',
  'двор',
  'выпечка',
  'аверс',
  'клен',
  'океан',
  'лямка',
  'берег',
  'австралиец',
  'голубь',
  'дубленка',
  'лазарет',
  'босоножка',
  'изумруд',
  'жаба',
  'купюра',
  'афинянин',
  'дерматин',
  'шнур',
  'траншея',
  'скатерть',
  'косточка',
  'компресс',
  'вкладчик',
  'метелка',
  'мозаика',
  'листва',
  'простыня',
  'планета',
  'древесина',
  'микроб',
  'смола',
  'аттестат',
  'щеколда',
  'циркуль',
  'аполлон',
  'абсорбент',
  'сигарета',
  'холодильник',
  'подсвечник',
  'раствор',
  'тапочки',
  'клоун',
  'муляж',
  'абрикос',
  'ромашка',
  'дискета',
  'залог',
  'фермер',
  'платок',
  'дипломат',
  'вексель',
  'шлюпка',
  'локон',
  'держатель',
  'бюро',
  'эльф',
  'гром',
  'бумажник',
  'воевода',
  'видеокассета',
  'трюм',
  'дозор',
  'плесень',
  'рана',
  'брокер',
  'мародер',
  'пудель',
  'мыльница',
  'балласт',
  'микстура',
  'артист',
  'дощечка',
  'аэропорт',
  'панель',
  'коровник',
  'альбинос',
  'аммиак',
  'колокол',
  'кочевник',
  'брюки',
  'кетчуп',
  'перекладина',
  'волхв',
  'мармелад',
  'искра',
  'кастет',
  'зоря',
  'фургон',
  'море',
  'волна',
  'мотор',
  'крыло',
  'масон',
  'патрон',
  'ключ',
  'огурец',
  'барий',
  'амфибия',
  'антиквариат',
  'крахмал',
  'декан',
  'вокзал',
  'перстень',
  'бульдог',
  'паук',
  'бандит',
  'глагол',
  'чемпион',
  'камень',
  'бусинка',
  'каталка',
  'консул',
  'бизон',
  'каемка',
  'урна',
  'эскадрон',
  'щавель',
  'водитель',
  'лысина',
  'каторга',
  'шайба',
  'утес',
  'атом',
  'килька',
  'зазор',
  'ковер',
  'деспот',
  'космодром',
  'аптечка',
  'слеза',
  'варежка',
  'кисет',
  'автопарк',
  'корпус',
  'температура',
  'кружево',
  'гиена',
  'банкет',
  'йогурт',
  'жилетка',
  'колесница',
  'оса',
  'кастрюля',
  'веко',
  'апартаменты',
  'пузырь',
  'бухта',
  'диктатор',
  'кишка',
  'землянин',
  'золото',
  'герань',
  'ткань',
  'крупа',
  'лунка',
  'волос',
  'контейнер',
  'стакан',
  'жвачка',
  'кондиционер',
  'аквалангист',
  'коршун',
  'кочевник',
  'мох',
  'манжета',
  'квартира',
  'тюлень',
  'баклан',
  'парусник',
  'мыло',
  'глобулин',
  'боцман',
  'ларек',
  'куча',
  'оливка',
  'барахолка',
  'подошва',
  'колосок',
  'обойма',
  'боб',
  'баранина',
  'миномет',
  'инструкция',
  'кухарка',
  'морс',
  'лиственница',
  'аврора',
  'настойка',
  'фанера',
  'комар',
  'перина',
  'аист',
  'барс',
  'антиквар',
  'лестница',
  'изба',
  'кроватка',
  'окунь',
  'брат',
  'медпункт',
  'конспект',
  'намордник',
  'студент',
  'богатырь',
  'чернослив',
  'мошкара',
  'мишень',
  'дробовик',
  'биржа',
];

function dontRepeatYourself() {
  time = currentLevel;
  seconds.innerHTML = time;
  if (currentLevel == 5) {
    secondWord.innerHTML = 'секунд:';
  } else {
    secondWord.innerHTML = 'секунды:';
  }
  start.removeAttribute('disabled');

  allButtons.forEach((btn) => {
    if (btn.classList.contains('current')) {
      btn.classList.add('levelDisplay');
    } else {
      btn.style.display = 'none';
    }
  });
}

easy.addEventListener('click', function () {
  this.classList.add('current');
  currentLevel = 5;
  dontRepeatYourself();
});

medium.addEventListener('click', function () {
  this.classList.add('current');
  currentLevel = 3;
  dontRepeatYourself();
});

hard.addEventListener('click', function () {
  this.classList.add('current');
  currentLevel = 2;
  dontRepeatYourself();
});

function gameStart() {
  score = 0;
  scoreDisplay.innerHTML = score;
  start.innerHTML = 'Начать игру!';
  startCountDown();
  typedWord.focus();
  showWord();
  typedWord.addEventListener('input', checkWords);
}

start.addEventListener('click', function () {
  prepCountDown = 3;
  prepeareMessage.style.display = 'block';
  typingResult.innerHTML = '';
  const prepearingCountDown = setInterval(() => {
    if (prepCountDown == 0) {
      clearInterval(prepearingCountDown);
      prepeareMessage.style.display = 'none';
    }
    prepeareTimer.innerHTML = prepCountDown--;
  }, 1000);
  setTimeout(gameStart, 4000);
});

function showWord() {
  const randIndex = Math.floor(Math.random() * words.length);
  const randWord = words[randIndex];
  randomWord.innerHTML = randWord;
}

function startCountDown() {
  timer = setInterval(countDown, 1000);
}

function countDown() {
  if (time > 0) {
    clockSound.play();
    time--;
  } else if (time === 0) {
    error.play();
    gameFinish();
    typedWord.value = '';
  }
  timeLeft.innerHTML = time;
}

function valid() {
  typingResult.innerHTML = 'Верно!';
  typingResult.style.color = 'green';
  showWord();
  typedWord.value = '';
  time = currentLevel + 1;
  success.play();
}

function checkWords() {
  const typedWordLoverCase = typedWord.value.toLowerCase();
  if (typedWordLoverCase) {
    if (
      typedWordLoverCase === randomWord.innerHTML &&
      randomWord.innerHTML.length <= 6
    ) {
      valid();
      score++;
    } else if (
      typedWordLoverCase === randomWord.innerHTML &&
      randomWord.innerHTML.length > 6
    ) {
      valid();
      score += 2;
    }
    scoreDisplay.innerHTML = score;
  }
}

function gameFinish() {
  clockSound.pause();
  randomWord.innerHTML = '';
  typingResult.innerHTML = 'Время вышло.';
  typingResult.style.color = 'red';
  start.innerHTML = 'Начать заново!';
  start.setAttribute('disabled', 'true');
  clearInterval(timer);
  allButtons.forEach((btn) => {
    btn.classList.remove('levelDisplay');
    btn.style.display = 'inline-block';
    btn.classList.remove('current');
  });
}

rulesTitle.addEventListener('click', function () {
  rulesContent.classList.toggle('show');
});
