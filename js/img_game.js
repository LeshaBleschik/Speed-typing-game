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
const rulesTitle = document.querySelector('#rules-title');
const rulesContent = document.querySelector('.rules-content');

const imgGalery = [
  {
    img: 'https://online-teacher.ru/image/english/newspaper.jpg',
    name: 'газета',
  },
  {
    img: 'https://minsknews.by/wp-content/uploads/2019/12/doll.png',
    name: 'деньги',
  },
  {
    img: 'https://flytothesky.ru/wp-content/uploads/2018/03/46356-696x459.jpg',
    name: 'глаз',
  },
  {
    img: 'https://media-polesye.by/files/300dsc06042_1.jpg',
    name: 'дом',
  },
  {
    img: 'https://static6.depositphotos.com/1092937/587/i/450/depositphotos_5873770-stock-photo-open-book.jpg',
    name: 'книга',
  },
  {
    img: 'https://img.7dach.ru/image/600/00/00/48/2017/06/12/e56e37.jpg',
    name: 'песок',
  },
  {
    img: 'https://images.lady.mail.ru/456539/',
    name: 'молоко',
  },
  {
    img: 'https://internationalwealth.info/wp-content/uploads/2018/02/BANK.jpg',
    name: 'банк',
  },
  {
    img: 'https://i.pinimg.com/564x/85/9e/ea/859eea33743fef3a855a1c8217e0fb8a.jpg',
    name: 'оружие',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/NASA_Earth_America_2002.jpg',
    name: 'земля',
  },
  {
    img: 'https://lavivion.ru/upload/image/BDR3011-Koltso-iz-belogo-zolota-s-brilliantom_1.jpg',
    name: 'кольцо',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe355lhcuJPhjuo7I4TqQ66lhegBWNgZiT8tCVs5WinQkrAynx9Q&s',
    name: 'масло',
  },
  {
    img: 'https://narodna-pravda.ua/wp-content/uploads/2019/08/gaz-939927-9juXCmxY-1024x683.jpg',
    name: 'газ',
  },
  {
    img: 'https://3003.by/images/news/waterfilter.webp',
    name: 'вода',
  },
  {
    img: 'https://img-fotki.yandex.ru/get/9309/185062298.a/0_dbfae_c602302a_XXL.jpg',
    name: 'трамвай',
  },
  {
    img: 'https://prousa.info/images/symbols/oak/oak_tree.jpg',
    name: 'дерево',
  },
  {
    img: 'https://all-auto.org/uploads/posts/2015-03/1426971627_ferrari-dvigatel-2.jpg',
    name: 'двигатель',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg',
    name: 'гора',
  },
  {
    img: 'https://lh4.googleusercontent.com/proxy/AjRDYoZDS5fQMJMi9MwFUEN-05nZGxZ_5q-Y3NhRdIW2qxic2c9D2q20ikOhbwcwiAoDNgm4QI4guDodM1vepSVbAEg0fBxz',
    name: 'дорога',
  },
  {
    img: 'https://lodki-lodki.ru/images/product_images/popup_images/1831_0.jpg',
    name: 'лодка',
  },
  {
    img: 'https://legal.report/wp-content/uploads/2018/12/Judge.jpg',
    name: 'судья',
  },
  {
    img: 'https://opt-671757.ssl.1c-bitrix-cdn.ru/upload/iblock/552/55268003b27363c6807de895ccfed289.png?153609505135184',
    name: 'окно',
  },
  {
    img: 'https://files.gifts.ru/reviewer/tb/9/6483.81_1.jpg',
    name: 'кружка',
  },
  {
    img: 'https://n1s1.hsmedia.ru/67/11/f8/6711f8fa964b75d4adfd771a791e9d4d/620x414_1_d5d14eda2b2341175f86312c4748c9f4@800x534_0x59f91261_20201534301394185932.jpeg',
    name: 'рыба',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg',
    name: 'луна',
  },
  {
    img: 'https://img.pravda.ru/image/preview/article/1/0/6/1424106_five.jpeg',
    name: 'хомяк',
  },
  {
    img: 'https://static.1000.menu/img/content/24071/sdobnoe-drojjevoe-testo-na-suxix-drojjax_1512125685_1_max.jpg',
    name: 'тесто',
  },
  {
    img: 'https://www.b-g.by/wp-content/uploads/2018/04/b-g.by_saluti.by_.jpg',
    name: 'салют',
  },
  {
    img: 'https://sovkusom.ru/wp-content/uploads/recepty/s/salat-alenushka/thumb.jpg',
    name: 'салат',
  },
  {
    img: 'https://images11.popmeh.ru/upload/img_cache/b97/b976c22202c0ad1f4098782dc7637b8f_ce_415x415x304x0_cropped_800x800.jpg',
    name: 'молния',
  },
  {
    img: 'https://kor.ill.in.ua/m/610x385/2267471.jpg',
    name: 'волна',
  },
  {
    img: 'https://www.mirprognozov.ru/uploads/images/old/1458803151-7931832934_0134f56441_h.jpg',
    name: 'солнце',
  },
  {
    img: 'https://images.by.prom.st/156753480_w640_h640_podushka-iz-naturalnogo.jpg',
    name: 'подушка',
  },
  {
    img: 'https://minsknews.by/wp-content/uploads/2019/12/boroda-boretsya-s-mikrobami.jpg',
    name: 'борода',
  },
  {
    img: 'https://masterokblog.ru/wp-content/uploads/1531638199_iplprl.jpg',
    name: 'дождь',
  },
  {
    img: 'https://www.dw.com/image/49416602_303.jpg',
    name: 'наводнение',
  },
  {
    img: 'https://www.intex-press.by/wp-content/uploads/2017/05/882.jpg',
    name: 'подарок',
  },
  {
    img: 'https://www.gastronom.ru/binfiles/images/20151209/b341e774.jpg',
    name: 'торт',
  },
  {
    img: 'https://poligraftorg.ru/bumaga/img/b-melovannaya.jpg',
    name: 'бумага',
  },
  {
    img: 'https://ic.pics.livejournal.com/davydov_index/60378694/2285258/2285258_original.png',
    name: 'пират',
  },
  {
    img: 'https://i.pinimg.com/originals/61/cb/3f/61cb3f8b904c44605c00a81d54cf2e33.jpg',
    name: 'щенок',
  },
  {
    img: 'https://kidwelcome.ru/content/images/zagadki_pro_radugu.jpg',
    name: 'радуга',
  },
  {
    img: 'https://images.kz.prom.st/101605623_velosiped-trek-marlin.jpg',
    name: 'велосипед',
  },
  {
    img: 'https://sun9-53.userapi.com/c830108/v830108047/f9d86/b3Pen5-eenM.jpg?ava=1',
    name: 'рыбак',
  },
  {
    img: 'https://www.b-g.by/wp-content/uploads/2017/10/3-uczitel-1280x720.jpg',
    name: 'учитель',
  },
  {
    img: 'https://www.pressball.by/images/stories/2019/10/20191023234251.jpg',
    name: 'футбол',
  },
  {
    img: 'https://hpstore.by/images/thumbnails/1659/1452/detailed/6/HP-ProBook-450-G6_culg-cm.jpg',
    name: 'ноутбук',
  },
  {
    img: 'https://www.sony.ru/image/415dba5bce4b5207a3360de8aa8f5b52?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
    name: 'наушники',
  },
  {
    img: 'https://naviny.by/sites/default/files/00nftn_ru_21.jpg',
    name: 'нефть',
  },
  ,
  {
    img: 'https://img.tvc-mall.com/uploads/details/861400113A-1.jpg',
    name: 'кошелек',
  },
  {
    img: 'https://ic.pics.livejournal.com/masterok/50816465/3544357/3544357_original.jpg',
    name: 'таблетка',
  },
  {
    img: 'https://pronogti.ru/wa-data/public/shop/products/44/51/15144/images/4854/4854.650@2x.jpg',
    name: 'ножницы',
  },
  {
    img: 'https://i1.rozetka.ua/goods/11252554/18758299_images_11252554086.jpg',
    name: 'ложка',
  },
  {
    img: 'https://shop.by/images/casio_gr_12_1.jpg',
    name: 'калькулятор',
  },
  {
    img: 'https://m.newizv.ru/attachments/624e2c51cb4cf4b27f5a01c41da50e0675211959/store/fill/450/253/80f4959789e0429d765ff0899e88ca47c09bfa66c64e8c917afaec17cacb/255412012_381947.jpg',
    name: 'сим-карта',
  },
  {
    img: 'https://www.kv.by/sites/default/files/styles/post_picture/public/key.png?itok=ijoa9hkn',
    name: 'ключ',
  },
  {
    img: 'https://images.ru.prom.st/535207881_w640_h640_dzhutovaya-verevka-dzhutovyj.jpg',
    name: 'веревка',
  },
  {
    img: 'https://amihome.by/upload/iblock/66b/ugl_richi_7.jpg',
    name: 'диван',
  },
  {
    img: 'https://luch.by/upload/iblock/8b3/wg01_n1_2x.png',
    name: 'часы',
  },
  {
    img: 'https://avatars.mds.yandex.net/get-mpic/1360852/img_id2742238876693859088.jpeg/9hq',
    name: 'флешка',
  },
  {
    img: 'https://loft-concept.ru/upload/iblock/d81/lamochka-loft-edison-retro-bulb-_5.jpg',
    name: 'лампочка',
  },
  {
    img: 'https://ic.pics.livejournal.com/crusandr/61156400/726101/726101_original.jpg',
    name: 'светофор',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9_%D0%BF%D1%83%D1%81%D0%BA_%D1%81_%D0%92%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%B3%D0%BE.jpg',
    name: 'ракета',
  },
  {
    img: 'https://cdn.etm.ru/ipro/164/gsl000142.jpg',
    name: 'розетка',
  },
  {
    img: 'https://i.pinimg.com/736x/5e/a1/5c/5ea15c34f043bff4e6de48c945fe5ab8.jpg',
    name: 'колодец',
  },
  {
    img: 'https://kipmu.ru/wp-content/uploads/ant.jpg',
    name: 'муравей',
  },
  {
    img: 'https://ont.by/static/article/big/index/koster-big.jpg',
    name: 'костер',
  },
  {
    img: 'https://5element.by/upload/runtime/images/42/16/4216730528-.jpeg',
    name: 'чайник',
  },
  {
    img: 'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/2/05/755124038305052.jpg',
    name: 'ледокол',
  },
  ,
  {
    img: 'https://i.pinimg.com/originals/f3/97/9c/f3979cab3c7001a9e6580a33e12772f7.jpg',
    name: 'колибри',
  },
  {
    img: 'https://igrushki.by/upload/resizer2/15/dbb/dbb88e7a30ade7674e1b163a899a6bdd.jpg',
    name: 'батут',
  },
  {
    img: 'https://cdn3.imgbb.ru/user/33/339534/201411/82ba44ba136104766cb374d4aa41aa0f.jpg',
    name: 'батарея',
  },
  {
    img: 'https://imarket.by/upload/simpleimage_cache/7b50741fde170611dc8fb6f084df8143_720x490_w0_100.jpg',
    name: 'кресло-качалка',
  },
  {
    img: 'https://arena-sporta.by/sites/default/files/ut-00008301.1.jpg',
    name: 'гантеля',
  },
  {
    img: 'https://atlantshop.by/upload/iblock/ce1/ce125ea0c7089b2a9efed595ac4b3b92.jpg',
    name: 'холодильник',
  },
  {
    img: 'https://img1.wbstatic.net/large/new/4720000/4724511-1.jpg',
    name: 'бритва',
  },
  {
    img: 'https://avatars.mds.yandex.net/get-mpic/1884605/img_id7004878513917092806.jpeg/9hq',
    name: 'стиральная машина',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bogolyubovo_16_%288012485519%29.jpg/1200px-Bogolyubovo_16_%288012485519%29.jpg',
    name: 'церковь',
  },
  {
    img: 'https://www.mtbank.by/image.php?width=&height=&image=/media/News/2018-12/123.png',
    name: 'такси',
  },
  {
    img: 'https://img.rg.ru/img/content/167/74/64/iStock-451543103_d_850.jpg',
    name: 'вулкан',
  },
  {
    img: 'https://avatars.mds.yandex.net/get-zen_doc/61795/pub_5c9b5ba21a1ea0425643c6d0_5c9b5bb56a3fda00b3ecc932/scale_1200',
    name: 'пустыня',
  },
  {
    img: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5c56d08b989f6500ad82b913_5c56d09025d7b000b1b3a8ef/scale_1200',
    name: 'мыло',
  },
  {
    img: 'https://cdn.4glaza.ru/images/products/large/0/binoculars-levenhuk-atom-10x50.jpg',
    name: 'бинокль',
  },
  {
    img: 'https://dilaingroup.by/image/cache/catalog/product_25-1000x1000.PNG',
    name: 'гвоздь',
  },
  {
    img: 'https://www.logoton.by/upload/Sh/imageCache/190/76f/c8e0bf2d97d706ef3290568cd46592dc.jpg',
    name: 'зажигалка',
  },
  {
    img: 'https://minsknews.by/wp-content/uploads/2019/05/497sdt9f.jpg',
    name: 'семья',
  },
  {
    img: 'https://www.dw.com/image/17050758_303.jpg',
    name: 'золото',
  },
  {
    img: 'https://www.menslife.com/upload/iblock/d7f/sakhar_belaya_smert.jpg',
    name: 'сахар',
  },
  {
    img: 'https://lh3.googleusercontent.com/proxy/TC7SlyNvCcGY095jG5PYDECdDBGsSdobtRY7LS7BeVathxCEBVop9gytuMXYRja9inTjJcNyUt5NT5QcYOBG3RdiO5pQmIewmH6vWnTaTw',
    name: 'снежинка',
  },
  {
    img: 'https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg',
    name: 'яблоко',
  },
  {
    img: 'https://hb.bizmrg.com/ex-press/images/content/x1024x1024/avtobus_borisov-15b7a90ca3fa71158ed9089857814b462231df3a.jpg',
    name: 'автобус',
  },
  {
    img: 'https://infoglaz.ru/wp-content/uploads/9b5beb884249d0246772d5dbc201.jpg',
    name: 'спички',
  },
  {
    img: 'https://netstorage-nur.akamaized.net/images/pogudx4eqr4jkuqof.jpg?imwidth=900',
    name: 'ребенок',
  },
  {
    img: 'https://sbio.info/datas/thumbs/728x410/1-1451681868-c2c.jpg',
    name: 'лист',
  },
  {
    img: 'https://faunistics.com/wp-content/uploads/2019/07/1-8.jpg',
    name: 'жираф',
  },
  {
    img: 'https://static4.depositphotos.com/1026550/376/i/450/depositphotos_3763236-stock-photo-gold-star.jpg',
    name: 'звезда',
  },
  {
    img: 'https://www.film.ru/sites/default/files/images/10(186).jpg',
    name: 'пикачу',
  },
  {
    img: 'https://natworld.info/wp-content/uploads/2016/12/%D0%B4%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%D1%8F-%D0%BB%D1%8F%D0%B3%D1%83%D1%88%D0%BA%D0%B0-700x500.jpg',
    name: 'лягушка',
  },
  {
    img: 'https://images.by.prom.st/72453868_mikroskop-mikromed-s-12.jpg',
    name: 'микроскоп',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2012/12/06/16/03/atom-68866_960_720.jpg',
    name: 'атом',
  },
];

start.addEventListener('click', function () {
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
    error.play();
    clearInterval(timer);
    gameFinish();
    typedWord.value = '';
    hiddenWord.style.display = 'block';
  }
  timeLeft.innerHTML = time;
}

function gameFinish() {
  typingResult.innerHTML = 'Игра окончена.';
  typingResult.style.color = 'red';
  start.innerHTML = 'Начать заново!';
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
