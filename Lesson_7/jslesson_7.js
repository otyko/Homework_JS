// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

const textOff = document.getElementById('text');
const butOff = document.getElementById('closed');
butOff.onclick = (event => {
    textOff.hidden = true;
    butOff.hidden = true;
});

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

const old = document.getElementById('old');
const setOld = document.getElementById('setOld');
setOld.onclick = (event => {
    if (old.value < 18) {
        confirm('Ваш вік менше 18');
    }
    console.log(old.value);
});

// - Створіть меню, яке розгортається/згортається при клику

const entity = document.getElementById('entity');
const meny = document.getElementById('meny');
let status = true;
meny.onclick = (event => {
    entity.hidden = status ? true : false;
    status = !status;
});

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

const comments = [
    {
        "postId": 1,
        "id": 1,
        "title": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "title": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "postId": 1,
        "id": 3,
        "title": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        "postId": 1,
        "id": 4,
        "title": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        "postId": 1,
        "id": 5,
        "title": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
    {
        "postId": 2,
        "id": 6,
        "title": "et fugit eligendi deleniti quidem qui sint nihil autem",
        "email": "Presley.Mueller@myrl.com",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
        "postId": 2,
        "id": 7,
        "title": "repellat consequatur praesentium vel minus molestias voluptatum",
        "email": "Dallas@ole.me",
        "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    },
    {
        "postId": 2,
        "id": 8,
        "title": "et omnis dolorem",
        "email": "Mallory_Kunze@marie.org",
        "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
    },
    {
        "postId": 2,
        "id": 9,
        "title": "provident id voluptas",
        "email": "Meghan_Littel@rene.us",
        "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
    },
    {
        "postId": 2,
        "id": 10,
        "title": "eaque et deleniti atque tenetur ut quo ut",
        "email": "Carmen_Keeling@caroline.name",
        "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
    },
    {
        "postId": 3,
        "id": 11,
        "title": "fugit labore quia mollitia quas deserunt nostrum sunt",
        "email": "Veronica_Goodwin@timmothy.net",
        "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
    },
    {
        "postId": 3,
        "id": 12,
        "title": "modi ut eos dolores illum nam dolor",
        "email": "Oswald.Vandervort@leanne.org",
        "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
    },];
comments.forEach(coment => {
    const blokComment = document.createElement('div');
    blokComment.id = 'comments';

    const titlle = document.createElement('p');
    titlle.innerText = `Title:${coment.title}`
    blokComment.appendChild(titlle);

    const butClosed = document.createElement('button');
    butClosed.innerText = 'Closed';
    butClosed.onclick = () => body.hidden = true;
    blokComment.appendChild(butClosed);

    const body = document.createElement('p');
    body.innerText = `Body:${coment.body}`
    blokComment.appendChild(body);

    document.body.appendChild(blokComment);
})

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form = document.getElementsByClassName('form');
for (let formElement of form) {
    formElement.style.margin = '4px';
}
;
const butForm = document.getElementById('butForm');
butForm.onclick = () => {
    for (let form1 of document.forms) {
        for (const form1Element of form1) {
            console.log(form1Element.value);
        }
    }
};

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

let tableBloc = document.getElementById('table');

const madeTable = (str, colums, targetTagId) => {
    const target = document.getElementById(targetTagId);

    const table = document.createElement('table');
    for (let i = 0; i < str; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < colums; j++) {
            const td = document.createElement('td');
            td.innerHTML = `${i}:${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    target.appendChild(table);
}

madeTable(4, 4, 'table');
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

const imgArray = [{alt: 'foto', url: 'picthers/a.jpg'},
    {alt: 'foto1', url: 'picthers/Acura.jpg'},
    {alt: 'foto2', url: 'picthers/b.jpg'},
    {alt: 'foto3', url: 'picthers/Audi.jpg'},
    {alt: 'foto5', url: 'picthers/c.jpg'}];
const blocImg = document.getElementById('blocImg');
const left = document.getElementById('left');
const right = document.getElementById('right');
const imgSrs = document.getElementById('imgId');
let indexFoto = 0;
left.onclick = () => {
    if (indexFoto - 1 < 0) {
        indexFoto = imgArray.length - 1;
    } else {
        indexFoto = indexFoto - 1;
    }
    imgSrs.src = imgArray[indexFoto].url;
};
right.onclick = () => {
    if (indexFoto = +1 > imgArray.length - 1) {
        indexFoto = 0;
    } else {
        indexFoto = indexFoto + 1;
    }
    imgSrs.src = imgArray[indexFoto].url;
    imgSrs.alt = imgArray[indexFoto].alt;
};

//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку



// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ