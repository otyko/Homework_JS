//  1) створити функцію яка приймає масив та виводить його

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

function maxNumArray(array = []) {
    let maxNum = -Infinity;
    for (let i = array.length - 1; i > 0; i--) {
        if (maxNum < array[i]) {
            maxNum = array[i];
        }
    }
    return maxNum;
}

let num = maxNumArray([1, 2, 122, 123, 12, 100, 100550]);
console.log(num);

// 6) створити функцію яка повертає найменьше число з масиву

function minNumArray(array = []) {
    let minNum = Infinity;
    for (let i = array.length - 1; i >= 0; i--) {
        if (minNum > array[i]) {
            minNum = array[i];
        }
    }
    return minNum;
}

let numMin = minNumArray([1, 2, 122, 123, 12, 100, 100550]);
console.log(numMin);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function summNumArr(array = []) {
    let summNum = 0;
    for (let i = 0; i < array.length; i++) {
        summNum += array[i];
    }
    return summNum;
}

let summ = summNumArr([1, 2, 122, 123, 12, 100, 100550]);
console.log(summ);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function summNumArrMiddle(array = []) {
    let summNumMiddle;
    let summNum = 0;
    for (let i = 0; i < array.length; i++) {
        summNum += array[i];
    }
    summNumMiddle = summNum / array.length;
    return summNumMiddle;
}

let summMidle = summNumArrMiddle([1, 2, 122, 123, 12, 100, 100550]);
console.log(summMidle);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function objectKeysArr(array) {
    let keysArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let ellement in array[i]) {
            keysArr.push(ellement);
        }
    }
    return keysArr;
}

let arrKeys = objectKeysArr([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(arrKeys);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function objectValuesArr(array = []) {
    let arrValuesAll = [];
    for (let argument of array) {
        for (let element in argument) {
            arrValuesAll.push(argument[element]);
        }
    }
    return arrValuesAll;
}

let arrValue = objectValuesArr([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(arrValue);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sumArrnum(array1 = [], array2 = []) {
    let sumnum = [];
    for (let num in array1) {
        sumnum.push(array1[num] + array2[num]);
    }
    return sumnum;
}

let arrSumm = sumArrnum([1, 2, 3, 4], [2, 3, 4, 5,]);
console.log(arrSumm);

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

let minNums = minMaxNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(minNums);

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
    for (let n = 0; n < array.length; n++) {
        if (i >= array.length - 1 || i < 0) {
            alert('Bad number');
            break;
        }
        if (n === i) {
            let arr = array[n]
            array[n] = array[n + 1];
            array[n + 1] = arr;
            console.log(array);
        }
    }

}

arrPositionI([9, 8, 0, 4], -1)

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

let str = () => {
    const str = document.createElement('div');
    str.innerHTML = `<h1>"Hello owu"</h1>`;
    document.body.appendChild(str);
}

str();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

let strArgument = (elemnt = 'h6', text = 'Hello owu') => {
    const str = document.createElement(elemnt);
    str.innerHTML = `${text}`;
    document.body.appendChild(str);
}

strArgument('h1', 'Тип елементу та текст отриманий через аргументи');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

let cars = [{
    id: 1,
    brands: 'Acura',
    price: 10000,
    age: 5,
    type: 'sedan',
    status: true,
    image: 'https://s0.rbk.ru/v6_top_pics/ampresize/media/img/8/12/754788777892128.jpeg'
}, {
    id: 2,
    brands: 'Audi',
    price: 15000,
    age: 3,
    type: 'cupe',
    status: true,
    image: 'https://autoua.net/media/uploads/audi/2020-audi-a3-sportback_(1).jpg'
}, {
    id: 3,
    brands: 'BMV',
    price: 17000,
    age: 2,
    type: 'sport',
    status: false,
    image: 'https://vehicle.img.symfio.de/320x,q85/vehicle/zO3n6b/5d5c0ee37585cd2d780369e5/5f200389408233.39627574.jpeg'
}, {
    id: 4,
    brands: 'Volvo',
    price: 14000,
    age: 4,
    type: 'caravan',
    status: true,
    image: 'https://airport.volvocarsdealer.com/uploads/media/dc_car_gallery/0001/34/thumb_33153_dc_car_gallery_new_slider.jpeg'
}, {
    id: 5,
    brands: 'Ford',
    price: 9000,
    age: 1,
    type: 'miniven',
    status: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-91bUrC7Hv3d0FNAMtTasgl7GNnSB5k0Siw&usqp=CAU'
}, {
    id: 6,
    brands: 'Fiat',
    price: 4000,
    age: 5,
    type: 'sedan',
    status: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitD1qgWLlhtu83HhWcOyxelqrW1Fo6KflVA&usqp=CAU'
}];

let getBlockCarWithId = (array = [], id = '') => {
    for (let car of cars) {
        const blockCar = document.createElement('div')
        blockCar.id = id;
        blockCar.innerHTML = `<h4>${car.id} ${car.brands} ${car.price}$  age:${car.age}years ${car.type} ${car.status}</h4>`;

        const imgCar = document.createElement('img');
        imgCar.src = car.image;
        imgCar.style.width = '300px';
        imgCar.style.height = '200px';
        blockCar.prepend(imgCar);

        blockCar.style.marginBottom = '4px';
        document.body.appendChild(blockCar);
    }

}
getBlockCarWithId(cars, 'id_car');

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