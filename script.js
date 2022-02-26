let phrases = [
{ text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
{ text: 'посмотреть скидки на авиабилеты', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
{ text: 'разобраться, о чём поют рэперы', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
{ text: 'Юрий Дудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
{ text: 'расставить книги на полке по цвету', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
{ text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
{ text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
{ text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
{ text: 'создать навую страничку в ', image: 'https://e7.pngegg.com/pngimages/758/928/png-clipart-instagram-illustration-logo-computer-icons-instagram-logo-text-symbol.png' },
{ text: 'полить цветы', image: 'https://w7.pngwing.com/pngs/989/544/png-transparent-floristry-flower-delivery-computer-icons-icon-design-flower-retail-computer-monochrome.png' },
{ text: 'писать код', image: 'https://img2.freepng.ru/20180203/dxq/kisspng-computer-programming-programmer-icon-design-softwa-coder-png-transparent-image-5a756d899b30b0.5759607015176451936357.jpg' },
{ text: 'сварить пельмешак', image: 'https://e7.pngegg.com/pngimages/342/681/png-clipart-dumpling-computer-icons-dumplins-food-text.png' },
{ text: 'спать', image: 'https://w7.pngwing.com/pngs/986/378/png-transparent-sleep-computer-icons-dreaming-zzz-s-angle-text-rectangle.png' },
{ text: 'скачать новую игру и поиграть в неё', image: 'https://w7.pngwing.com/pngs/872/195/png-transparent-casino-game-video-game-computer-icons-super-mario-game-text-rectangle.png' },
{ text: 'заказать на AliExpress что-либо', image: 'https://e7.pngegg.com/pngimages/579/342/png-clipart-computer-icons-shopping-cart-software-shopping-cart-text-logo.png' },
{ text: 'решайте САМи', image: 'https://w7.pngwing.com/pngs/169/895/png-transparent-computer-icons-person-thinking-man-miscellaneous-microphone-text.png' },
{ text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
{ text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  image.src = randomElement.image;

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
