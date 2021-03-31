// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

const getIdContent = document.getElementById('content');
const getText = getIdContent.innerText;
console.log(getText);

// b) отримує текст з блоку з id "rules"
const getIdRules = document.getElementById('rules');
const getHTML = getIdRules.innerHTML;
console.log(getHTML);

// c) замініть текст параграфа з id 'content' на будь-який інший

getIdContent.innerText = 'замініть текст параграфа з id content на будь-який інший';

// d) замініть текст параграфа з id 'rules' на будь-який інший

getIdRules.innerHTML = `<h2>замініть текст параграфа з id rules на будь-який інший</h2>`;

// e) змініть кожному елементу колір фону на червоний

getIdContent.style.backgroundColor = 'red';
getIdRules.style.backgroundColor = 'red';

// f) змініть кожному елементу колір тексту на синій

getIdContent.style.backgroundColor = 'blue';
getIdRules.style.backgroundColor = 'blue';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(getIdRules.classList);

// h) отримати всі елементи з класом fc_rules

const getClassName = document.getElementsByClassName("fc_rules");

// i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (const elemClass of getClassName) {
    elemClass.style.color = 'red';
}

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

for (const user of users) {
    const blokUser = document.createElement('div');
    const formUser = document.createElement('div');

    const userName = document.createElement('h4');
    userName.innerHTML = `name:${user.name}`;
    formUser.append(userName);

    const userAge = document.createElement('h4');
    userAge.innerHTML = `age:${user.age} `;
    formUser.append(userAge);

    const userStatus = document.createElement('h4');
    userStatus.innerHTML = `status:${user.status} `;
    formUser.append(userStatus);
    blokUser.append(formUser);

    const blokAddres = document.createElement('div');
    const userCity = document.createElement('h4')
    userCity.innerHTML = `city: ${user.address.city};`
    blokAddres.append(userCity);
    const userCountry = document.createElement('h4')
    userCountry.innerHTML = `country: ${user.address.country};`
    const userStreet = document.createElement('h4')
    userStreet.innerHTML = `street: ${user.address.street};`
    blokAddres.append(userStreet);
    blokAddres.append(userCountry);
    const userHouseNumber = document.createElement('h4')
    userHouseNumber.innerHTML = `houseNumber: ${user.address.houseNumber};`
    blokAddres.append(userHouseNumber);

    blokUser.append(blokAddres);

    formUser.style.display = 'flex';
    formUser.style.justifyContent = 'space-around';
    formUser.style.width = '60%'

    blokAddres.style.display = 'flex';
    blokAddres.style.flexDirection = 'column';
    blokAddres.style.justifyContent = 'centre';
    blokAddres.style.width = '40%'
    userCity.style.margin = '0';
    userCountry.style.margin = '0';
    userStreet.style.margin = '0';
    userHouseNumber.style.margin = '0';
    blokAddres.style.borderLeft = '4px solid blue';
    blokAddres.style.paddingLeft = '4px';

    blokUser.style.display = 'flex';
    blokUser.style.justifyContent = 'space-around';
    blokUser.style.marginTop = '4px';
    blokUser.style.border = '4px solid blue';
    blokUser.style.borderRadius = '4px';
    document.body.append(blokUser);
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];

for (const user of usersWithId) {
    for (const place of citiesWithId) {
        if (user.id === place.user_id) {
            user.address = place;
        }
    }
}
for (const user of usersWithId) {
    usersWithCities.push(user);
}

console.log(usersWithCities);

//_____________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// ===========================================================================
