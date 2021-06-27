const start = document.querySelector('.btn-start');
const displayText = document.querySelector('.displayText');
const textArea = document.querySelector('.textArea');
const tipTitle = document.querySelector('.tip');
const tipContent = document.querySelector('.tip-content');
const progressBar = document.querySelector('.progress-bar');
const clearBtn = document.querySelector('.clear');

const text = [
  'Световой год - это величина, измеряющая расстояние, а не время (как можно предположить из названия). Световой год - это расстояние, которое луч света проходит за один земной год, или 9,5 триллионов километров.',
  'В масштабе Вселенной, измерение расстояний в километрах или милях не очень удобно, поэтому был введён световой год. Точно так же, как вы можете измерить расстояние до продуктового магазина за время, необходимое для того, чтобы доехать до него, так и астрономы измеряют расстояние до звёзд за время, которое требуется свету для путешествия к нам.',
  'Измерение в световых годах также позволяет астрономам определить, как далеко назад во времени они заглядывают. Поскольку свету требуется время, чтобы добраться до наших глаз, всё, что мы видим на ночном небе, уже произошло. Другими словами, когда вы наблюдаете что-то на расстоянии 1 светового года, вы видите это так, как оно выглядело ровно год назад. Мы видим галактику Андромеды такой, какой она была 2,5 миллиона лет назад.',
  'Подобно градусам, световой год также можно разбить на меньшие единицы: световые часы, световые минуты, световых секунды. Например, Солнце находится на расстоянии более 8 световых минут от Земли, а Луна - чуть более чем в одной световой секунде. Учёные используют эти термины, когда говорят о связи с космическими спутниками или роверами.',
  'На Титане, туманной и крупнейшей луне Сатурна, кружит долгоживущий зимний полярный вихрь, отличающийся от земных лишь специфической химией спутника, заявляют планетологи в исследовании, представленном в журнале Geophysical Research Letters.',
  'Титан - вторая по величине луна в Солнечной системе и единственная с плотной атмосферой, сравнимой с земной. Сатурнианская луна может казаться самым похожим на Землю местом с ее временами года, дождями и поверхностными озерами, но она примерно в 10 раз дальше от Солнца и очень холодная. Более холодные слои стратосферы Титана расположены ближе к поверхности спутника, а более теплые - дальше от нее.',
  'Полярный вихрь ранее объяснил обогащение стратосферы спутника следовыми газами, провоцирующими неожиданно сильный холод, наблюдаемый в южном полушарии в начале зимы. Согласно новому исследованию, сочетание охлаждения, обусловленного следовыми газами, и потепления, вызванного опусканием воздуха из верхних слоев, делит зиму Титана на две фазы.',
  'Квинтет Стефана представляет собой компактную группу из пяти галактик и является пособием для изучения коллективной эволюции галактик, подверженных целому ряду эффектов, таким как взаимодействия и медленные столкновения, которые создают гравитационные звездные потоки, газовые уплотнения, звездообразование и межгалактические звездные системы.',
  'В 1936 г., когда еще не знали, что Плутон - двойная планета, была предложена гипотеза о том, что когда-то был одним из спутников Нептуна, но в результате сближения с неизвестной планетой оказался выброшен из системы, а другой спутник Нептуна - Тритон - перешел при этом на необычную орбиту с обратным вращением.',
  'Плутон действительно похож на спутник Нептуна Тритон. И хотя критики утверждали, что орбиты Нептуна и Плутона вообще не пересекались, идея близкого родства этих тел постепенно распространилась. В 1984 г. были даже выполнены расчеты совместного происхождения Тритона и Плутона, в которых рассматривалась возможность захвата Нептуном массивного протопланетного тела, распавшегося на Тритон и Плутон.',
];

textArea.addEventListener('input', () => {
  clearBtn.style.display = 'block';
  let gameStatus = true;
  const textCharacter = document.querySelectorAll('.text-character');
  const textAreaValue = textArea.value.split('');
  textCharacter.forEach(function (spanCharacter, index) {
    const valueCharacter = textAreaValue[index];
    if (!valueCharacter) {
      spanCharacter.classList.remove('correct');
      spanCharacter.classList.remove('incorrect');
      gameStatus = false;
    } else if (spanCharacter.innerText === valueCharacter) {
      spanCharacter.classList.add('correct');
      spanCharacter.classList.remove('incorrect');
    } else {
      spanCharacter.classList.remove('correct');
      spanCharacter.classList.add('incorrect');
      gameStatus = false;
    }
  });

  if (!textArea.value) {
    clearBtn.style.display = 'none';
  }

  if (gameStatus) {
    displayText.innerHTML = '';
    randonTextGenerator();
    textArea.value = '';
  }

  function progress() {
    const currentProc = Math.floor(
      (textAreaValue.length / textCharacter.length) * 100
    );
    progressBar.innerText = currentProc + '%';
    progressBar.style.width = currentProc + '%';
  }
  progress();
});

start.addEventListener('click', () => {
  if (!displayText.innerText) {
    randonTextGenerator();
  }
  textArea.focus();
});

tipTitle.addEventListener('click', () => {
  tipContent.classList.toggle('show');
});

clearBtn.addEventListener('click', function () {
  textArea.value = '';
  progressBar.innerText = '';
  progressBar.style.width = '0%';
  const textCharacter = document.querySelectorAll('.text-character');
  textCharacter.forEach(function (spanCharacter) {
    spanCharacter.classList.remove('correct');
    spanCharacter.classList.remove('incorrect');
  });
  clearBtn.style.display = 'none';
});

function randonTextGenerator() {
  const random = Math.floor(Math.random() * text.length);
  const randomText = text[random];
  randomText.split('').map((character) => {
    const span = document.createElement('span');
    span.classList.add('text-character');
    span.innerText = character;
    displayText.appendChild(span);
  });
}
