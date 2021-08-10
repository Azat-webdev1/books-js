const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const h2 = document.querySelectorAll('h2');
const adv = document.querySelector('.adv');
const blanks = document.querySelectorAll('ul');
const blank = document.querySelectorAll('li');

book[1].remove();
book[2].remove();
book[3].remove();
book[5].remove();

//Восстановить порядок книг.
books[0].append(book[3]);
books[0].append(book[5]);
book[5].after(book[2]);
books[0].prepend(book[1]);

//Заменить картинку заднего фона 
document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

//Исправить заголовок в книге 3
h2[4].innerHTML = '<a>Книга 3. this и Прототипы Объектов</a>';

adv.remove();

//Восстановить порядок глав во второй и пятой книге
blank[9].after(blank[2]);
blank[3].after(blank[6]);
blank[9].before(blank[7]);
blank[4].before(blank[8]);
blank[49].before(blank[55]);
blank[50].after(blank[48]);
blank[54].before(blank[51]);
