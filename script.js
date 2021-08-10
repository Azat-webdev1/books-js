const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const h2 = document.querySelectorAll('h2');

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