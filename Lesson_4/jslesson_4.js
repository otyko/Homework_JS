// 1) створити функцію яка приймає масив та виводить його

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

function getArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

getArray(users);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function newArrayNum() {
    let getArrRandom1 = [];
    let getNumRandom1;
    for (let r = 0; ; r++) {
        let getNumRandomin = 8;
        let getNumRandomax = 732;
        getNumRandom1 = Math.round(Math.random(r) * (getNumRandomax - getNumRandomin + 1) + getNumRandomin);
        getArrRandom1.push(getNumRandom1);
        if (getArrRandom1.length === 10) {
            break;
        }
    }
    return getArrRandom1;
}

let randomArray = newArrayNum();
getArray(randomArray);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNum(num1, num2, num3) {
    if (num1 - num2 >= 0 && num3 - num2 >= 0) {
        console.log(num2)
    }
    if (num2 - num1 >= 0 && num3 - num1 >= 0) {
        console.log(num1)
    }
    if (num1 - num3 >= 0 && num2 - num3 >= 0) {
        console.log(num3);
    }
}

minNum(num1 = +prompt(), num2 = +prompt(), num3 = +prompt());

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNum(num1, num2, num3) {
    if (num1 - num2 >= 0 && num1 - num3 >= 0) {
        console.log(num1)
    }
    if (num2 - num1 >= 0 && num2 - num3 >= 0) {
        console.log(num2)
    }
    if (num3 - num1 >= 0 && num3 - num2 >= 0) {
        console.log(num3);
    }
}

maxNum(num1 = +prompt(), num2 = +prompt(), num3 = +prompt());

// 5) створити функцію яка повертає найбільше число з масиву

let maxNum = [];

function maxNumArray(array = []) {
    for (i = randomArray.length - 1; i > 0; i--) {
        if (maxNum < randomArray[i]) {
            maxNum = randomArray[i];
        }
    }
}

maxNumArray();
console.log('--------------------------------------------');
console.log(maxNum);

// 6) створити функцію яка повертає найменьше число з масиву

let minNum = [732];

function minNumArray(array = []) {
    for (i = randomArray.length; i > 0; i--) {
        if (minNum > randomArray[i]) {
            minNum = randomArray[i];
        }
    }
}

minNumArray();
console.log('--------------------------------------------');
console.log(minNum);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

let summNum = 0;

function summNumArr(array = []) {
    for (let i = 0; i < randomArray.length; i++) {
        summNum += randomArray[i];
    }
}

summNumArr();
console.log(summNum);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let summNumMiddle = 0;
let summNum = 0;

function summNumArrMiddle(array = []) {
    for (let i = 0; i < randomArray.length; i++) {
        summNum += randomArray[i];
    }
    summNumMiddle = summNum / randomArray.length
}

summNumArrMiddle();
console.log(summNumMiddle);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function objectKeysArr(array = []) {
    let keysArr = Object.keys(array);
    for (i= 0;i< array.length;i++) {
        let keysArrrelement = Object.keys(array[i]);
        console.log(keysArrrelement);
    }
    console.log(keysArr);
}

objectKeysArr(users);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function objectValuesArr(array = []) {
    for (user of users) {
        let arrValuesAll = [];
        let valuesArr = Object.values(user);
        arrValuesAll.push(valuesArr);
        let valuesArrKeys = Object.values(user.address);
        arrValuesAll.push(valuesArrKeys);
        console.log(arrValuesAll);

    }
}

objectValuesArr();

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arrNum1 = [1, 2, 3, 4];
let arrNum2 = [2, 3, 4, 5,];
let sumnum = [];

function sumArrnum(array = []) {
    for (i = 0; i < arrNum1.length; i++) {
        for (i = 0; i < arrNum2.length; i++) {
                let sum = arrNum1[i] + arrNum2[i];
                sumnum.push(sum);
        }
    }
}

sumArrnum();
console.log(sumnum);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minMaxNum() {
    let min = Infinity;
    let max = -Infinity;
    for (const argument of arguments) {
        if (min > argument) {
            min = argument;
        }
        if (max < argument) {
            max = argument;
        }
    }
    console.log(max)
    return min;
}
let minNum = minMaxNum(1,2,3,4,5,6,7,8,9,10);
console.log(minNum);

//===================================================================================================================
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.


//==============================================================================================================================================================================
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

function arrPositionI(array = [], i = 0) {
    for (n = 0; n < array.length; n++) if (n === i) {
        let arr = array[n]
        array[n] = array[n + 1];
        array[n + 1] = arr;
    }
    console.log(array);
}

arrPositionI([9, 8, 0, 4], 1)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arrZeroEnd = (array = []) => {
    if (array.length >= 2 && array.length <= 100) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === 0) {
                array.splice(i, 1);
                array.push(0);

            }
        }
    }
    console.log(array);
}
arrZeroEnd([1, 2, 3, 4, 0]);

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';
let normFunName = (name) => {
    name = name.trim();
    name = name.replace(/\s+/g, ' ');
    console.log(name);

}
normFunName(n1);
normFunName(n2);
normFunName(n3);

// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

let str = ()=>{
    const str = document.createElement('div');
    str.innerHTML = `<h1>"Hello owu"</h1>`;
    document.body.appendChild(str);
}

str();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

let strArgument = (elemnt = 'h6',text = 'Hello owu')=>{
    const str = document.createElement(elemnt);
    str.innerHTML = `${text}`;
    document.body.appendChild(str);
}

strArgument('h1','Тип елементу та текст отриманий через аргументи');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //
//
//
//
// ============================================================================================
//                              ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
//
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]