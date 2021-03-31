// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write

let hi = "hello";
let school = "owu";
let isdom = "com";
let country = "ua";
let nom = 1;
let num9 = 10;
let numMin = -999;
let numMax = 123;
const Pi = 3.14
let two = 2.7;
let fourSqa = 16;
let isTrue = true;
let isFalse = false;

console.log(hi);
console.log(school);
console.log(isdom);
console.log(country);
console.log(nom);
console.log(num9);
console.log(numMin);
console.log(numMax);
console.log(Pi);
console.log(two);
console.log(fourSqa);
console.log(isTrue);
console.log(isFalse);

alert(hi);
alert(school);
alert(country);
alert(isdom);
alert(nom);
alert(num9);
alert(numMin);
alert(numMax);
alert(Pi);
alert(two);
alert(fourSqa);
alert(isTrue);
alert(isFalse);

document.write(hi + ' ');
document.write(school + '.');
document.write(isdom + '.');
document.write(country + ' ');
document.write(nom);
document.write(num9);
document.write(numMin + '-');
document.write(numMax + '  ');
document.write(Pi + ' ');
document.write(two + ' ');
document.write(fourSqa + ' ');
document.write(isTrue + ' ');
document.write(isFalse);

// // // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// // //     Вивести кожну змінну за допомогою: console.log , alert, document.write

hi = "good-evening";
school = "gmail";
isdom = "dot";
country = "pl";
nom = "first";
num9 = "ten";
numMin = -100;
numMax = 100;
// const Pi = 3.14
two = 2;
fourSqa = 2;
isTrue = false;
isFalse = true;

console.log(hi);
console.log(school);
console.log(isdom);
console.log(country);
console.log(nom);
console.log(num9);
console.log(numMin);
console.log(numMax);
// console.log(Pi);
console.log(two);
console.log(fourSqa);
console.log(isTrue);
console.log(isFalse);

alert(hi);
alert(school);
alert(isdom);
alert(country);
alert(nom);
alert(num9);
alert(numMin);
alert(numMax);
// alert(Pi);
alert(two);
alert(fourSqa);
alert(isTrue);
alert(isFalse);

document.write(hi + ' ');
document.write(school + '.');
document.write(isdom + '.');
document.write(country + ' ');
document.write(nom);
document.write(num9);
document.write(numMin + '-');
document.write(numMax + '  ');
// document.write(Pi + ' ');
document.write(two + ' ');
document.write(fourSqa + ' ');
document.write(isTrue + ' ');
document.write(isFalse);

// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name1 = prompt('');
let fatherName = prompt('');
let age1 = prompt('')
document.write('"' + 'Вітаю' + ' ' +
    '*' + name1 + '*' + ' ' + '*' + fatherName + '*' + '.' + ' ' + 'Тобі' + ' ' + '*' + age1 + '*' + ' ' + 'років' + '"' + '.'
);
console.log('"' + 'Вітаю' + ' ' +
    '*' + name1 + '*' + ' ' + '*' + fatherName + '*' + '.' + ' ' + 'Тобі' + ' ' + '*' + age1 + '*' + ' ' + 'років' + '"' + '.'
);
// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
let user1 = name1 + ' ' + fatherName + ' ' + age1;
console.log(user1);

// // - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

let str1 = prompt('Введіть число');
let str2 = prompt('Введіть число');
let str3 = prompt('Введіть число');
let num1 = parseInt(str1);
let num2 = parseInt(str2);
let num3 = parseInt(str3);
console.log(num1);
console.log(num2);
console.log(num3);

// // - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

let st1 = +prompt('Введіть число');
let st2 = +prompt('Введіть число');
let st3 = +prompt('Введіть число');
let st4 = +prompt('Введіть число');
let nm1 = st1 + st2 + st3 + st4;
console.log(nm1);

// // - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// //     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

str1 = prompt('Введіть дробове число');
str2 = prompt('Введіть дробове число');
str3 = prompt('Введіть дробове число');
let result = parseFloat(str1) + parseFloat(str2) + parseFloat(str3);
console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

str1 = +prompt('Введіть дробове число');
str2 = +prompt('Введіть дробове число');
str3 = +prompt('Введіть дробове число');
result = str1 + str2 + str3;
console.log(result);

// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25

str1 = +prompt('Введіть число')
str2 = +prompt('Введіть число');
result = Math.pow(str1, str2);
console.log(result);

//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!

//        5 < 6 -> true
//        5 > 6 -> false
//        5 >= 6 -> false
//        5 == 6 -> false
//        10 == 10 -> true
//        10 === 10 -> true
//        10 != 10 -> false
//        10 < 10 -> false
//        10 > 10 -> false
//        123 === '123' -> false
//        123 == '123' -> true

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.

// console.log(132 > 100 && 45 < 12 ) -> false
// console.log(34 > 33 && 23 < 90 ) -> true
// console.log(99 > 100 && 45 > 12 ) -> true
// console.log(132 > 100 || 45 < 12 ) -> true
// console.log(111 > 11 || 45 < 111 ) -> true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ) -> true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ) -> true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ) -> false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )) -> true
// console.log(!!'-1') -> true
// console.log(!!-1) -> true
// console.log(!!'0') -> true
// console.log(!!'null') -> true
// console.log(!!'undefined') -> true
// console.log(!!(3/'owu')) -> false
// console.log((111 > 11 || 45 < 111) ||  !!'0') -> true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )) -> false


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

let str7 = 'Привіт';//string
let num7 = 123;//number
let flag = true;//boolean
let txt = 'true';//string
console.log(typeof str7);
console.log(typeof num7);
console.log(typeof flag);
console.log(typeof txt);

// 2. Оголосіть змінні a1 = 2, a2 = 3 , a3 = 11, a4 = 8, a5 = 1. За домогою 3х математичних оператцій отримайте числа:
//         34 = 11 * 3 + 1
//         12 = 8 / 2 * 3
//         66 = 2 * 3 * 11
//         90 = 11 * 8 + 2
//         87 = 11 * 8 - 1
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;
console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

let heightC = 10;
let dC = 4;
let v = 2 * Math.PI * Math.pow((dC / 2), 2) * heightC;
console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;
let giP = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(giP);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

let str = '"Hello world"';
document.write(str);
alert(str);
console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

alert('Тимщшенко О.П\n39\nТуризм');

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

str1 = 'Кто';
str2 = 'ты';
str3 = 'такой?';
let contecatenation = str1 + ' ' + str2 + ' ' + str3;
document.write(contecatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); //205 добуток двох стрічок;
// document.write(str - a + "<br/>");// 15 визначає два числа, стрічки тільки при додаванні;
// document.write(str * "2" + "<br/>");//40;
// document.write(str / 2 + "<br/>");//10.

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?

// parseInt("3.14") -> 3;
// parseInt("-7.875") ->(-7);
// parseInt("435") -> 435;
// parseInt("Вася") -> NaN;

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже

let str8 = prompt("Enter something", "ho-ho")
console.log(str8);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

let num = prompt('Введіть число');
let num4 = prompt('Введіть число');
alert(parseFloat(num) + parseFloat(num4));

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let name = prompt('Enter name');
let fistName = prompt('Enter Fist name');
let age = prompt('Enter age');
let user = 'Доброго вечера' + ' ' + name + ' ' + fistName + ',' + 'мои поздравления что вам' + ' ' + age + '.';
alert(user);

// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let numF = prompt('Введіть число');
let numS = prompt('Введіть число');
let numT = prompt('Введіть число');

if (numF > numS && numS > numT) {
    console.log(numT, numS, numF);
}
if (numF > numT && numT > numS) {
    console.log(numS, numT, numF);
}
if (numS > numF && numF > numT) {
    console.log(numT, numF, numS);
}
if (numS > numT && numT > numF) {
    console.log(numF, numT, numS)
}
if (numT > numF && numF > numS) {
    console.log(numS, numF, numT);
}
if (numT > numS && numS > numF) {
    console.log(numF, numS, numT)
}

// let numArr = [parseFloat(numF), parseFloat(numS), parseFloat(numT)];
// numArr.sort(function (a,b)
// {
//     return b - a;
// });
// console.log(numArr);

// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let color = prompt('Enter color');
switch (color) {
    case 'зеленый':
        console.log("иди");
        break;
    case 'желтый':
        console.log("подожди");
        break;
    case 'красный':
        console.log("стой");
        break;
    default:
        console.log("делай что хочеш");
}

//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let trafficLight = prompt('Enter color')
let isCar = confirm('Are there cars on the road?');
if (trafficLight === 'зеленый' && isCar === false) {
    alert('иди');
}
if (trafficLight === 'зеленый' && isCar === true) {
    alert('Подожди пока нарушители проедут');
}
if (trafficLight === 'желтый' && isCar === true) {
    alert('Жди');
}
if (trafficLight === 'желтый' && isCar === false) {
    alert('Все рано жди');
}
if (trafficLight === 'красный' && isCar === false) {
    alert('Стой все рано');
}
if (trafficLight === 'красный' && isCar === true) {
    alert('Стой и жди');
}
if (trafficLight === '' || trafficLight == undefined) {
    alert('делай что хочешь');

}