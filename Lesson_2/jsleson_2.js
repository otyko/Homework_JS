// // --створити масив та вивести його в консоль:
// //     - з 5 числових значень

let arrNum = [1, 2, 3, 4, 5];
console.log(arrNum);

// // - з 5 стічкових значень

let arrStr = ['a', 'b', 'c', 'd', 'e'];
console.log(arrStr);

// // - з 5 значень стрічкового, числового та булевого типу

let arrMix = ['a', 1, true, 2, 'b'];
console.log(arrMix);

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let myArr = [];

myArr[0] = 'ok';
myArr[1] = 10;
myArr[2] = 'It';
myArr[3] = 'is';
myArr[4] = 'cool';
myArr[5] = 'html';
myArr[6] = 'js';
myArr [7] = 'java';
myArr[8] = 'QA';
myArr[9] = 'it';
myArr[10] = 'Is';
myArr[11] = true;

console.log(myArr);

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);
console.log(myArr[5]);
console.log(myArr[6]);
console.log(myArr[7]);
console.log(myArr[8]);
console.log(myArr[9]);
console.log(myArr[10]);
console.log(myArr[11]);

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>${myArr[i]}</div> `);
}

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>${i}.${myArr[i]}</div>`)
}

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write('<h1>Hello Ok10</h1>');
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


while (i < 20) {
    document.write(`<h1>${i}. Hello Ok10</h1>`);
    i++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrNum10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (num of arrNum10) {
    console.log(num);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrStr10 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z'];
for (str of arrStr10) {
    console.log(str);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrMix10 = [1, 's', true, 2, 'g', false, 3, 'k', 4, 'z'];
for (let mix of arrMix10) {
    console.log(mix);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let isTyp = [1, 'a', true, 2, 's', false, 3, 'd', true, 4];
for (let typ of isTyp) {
    if (typeof (typ) == "boolean") {
        console.log(typ);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let typ of isTyp) {
    if (typeof (typ) == "number") {
        console.log(typ);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let typ of isTyp) {
    if (typeof (typ) == "string") {
        console.log(typ);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

for (let i = 0; i < isTyp.length; i++) {
    console.log(isTyp[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<h2>${i}</h2>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<h2>${i}</h2>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 200; i += 2) {
    console.log(i);
    document.write(`<h2>${i}</h2>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<h2>${i}</h2>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0 && i !== 0) {
        console.log(i);
        document.write(`<h2>${i}</h2>`);
    }
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

let min1;
let sec1;
const ms1 = 59;
for (min1 = 0; min1 <= 2; min1++) {
    for (sec1 = 0; sec1 <= ms1; sec1++) {
        if (sec1 < 10) {
            sec1 = '0' + sec1
        }
        if (min1 === 2 && sec1 === '01') {
            break;
        }
        console.log(min1 + ':' + sec1);
    }
}

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

let hou;
let min;
let sec;
const ms = 59;
for (hou = 0; hou <= 2; hou++) {
    for (min = 0; min <= ms; min++) {
        if (min < 10) {
            min = '0' + min;
        }
        if (hou === 2 && min === 21) {
            break;
        }
        for (sec = 0; sec <= ms; sec++) {
            if (sec < 10) {
                sec = '0' + sec
            }
            if (hou === 2 && min === 20 && sec === '01') {
                break;
            }
            console.log('0' + hou + ':' + min + ':' + sec);
        }
    }
}

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let arrPysh = ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
    arrPysh.push(i);
}
console.log(arrPysh);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arrRev = [1, 2, 3];
let arrRevNew = [];
for (let i = arrRev.length - 1; i >= 0; i--) {
    arrRevNew[i] = arrRev.shift(i);
}
console.log(arrRevNew);

// let arrNew = arrRev.reverse();
// console.log(arrNew);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let arrPush = [1, 2, 3];
for (let i = arrPush.length + 1; i <= 6; i++) {
    arrPush.push(i);
}
console.log(arrPush);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let arrUnshift = [1, 2, 3];
for (let i = 6; i >= 4; i--) {
    arrUnshift.unshift(i);
}
console.log(arrUnshift);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let getElem = ['js', 'css', 'jq'];
let elem = getElem.shift();
document.write(elem, '<br>');

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

elem = getElem.pop();
document.write(elem);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

let arrFull = [1, 2, 3, 4, 5];

for (let i = 0; i < 3; i++) {
    arrFull.shift(i);
}
console.log(arrFull);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

let arrFull1 = [1, 2, 3, 4, 5];
for (let i = arrFull1.length - 1; i >= 2; i--) {
    arrFull1.pop(i);
}
console.log(arrFull1);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arrFull2 = [1, 2, 3, 4, 5];
let arrPart2 = ['a', 'b', 'c'];
let arrStore = [];
for (let i = 0; i < 3; i++) {
    arrStore.push(arrFull2.shift(i));
}
for (let i = 0; i < 3; i++) {
    arrFull2.unshift(arrPart2.pop(i));
}
for (let i = 0; i < 3; i++) {
    arrFull2.unshift(arrStore.pop(i));
}
console.log(arrFull2);

//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.

let arrFuu3 = [1, 2, 3, 4, 5];
let arrPart3 = ['a', 'b', 'c', 'e'];
let arrStore3 = [];
arrStore3.push(arrFuu3.pop());
arrStore3.push(arrPart3.pop());
arrFuu3.push(arrPart3.pop());
for (let n = 0; n < 2; n++) {
    arrFuu3.push(arrStore3.shift(n));
}
arrStore3.push(arrFuu3.shift());
for (let n = 0; n < 2; n++) {
    arrFuu3.unshift(arrPart3.pop(n));
}
arrFuu3.unshift(arrStore3.shift());
console.log(arrFuu3);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let num of arrNum2) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let arrClone = [];
for (let i = arrNum2.length; i > 0; i--) {
    arrClone.push(arrNum2.shift(i));
}
console.log(arrClone);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arrClone2 = [];
for (let num of arrClone) {
    arrClone2.push(num);
}
console.log(arrClone2);

// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arrNum3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while

let j = 0;
while (j <= arrNum3.length - 1) {
    console.log(arrNum3[j]);
    i++;
}

// 2. перебрати його циклом for

for (let num of arrNum3) {
    console.log(num);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let num1 = 0;
while (num1 <= arrNum3.length - 1) {
    if (num1 % 2 !== 0) {
        console.log(num1, arrNum3[num1]);
    }
    num1++;
}


// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i <= arrNum3.length; i++) {
    if (i % 2 !== 0) {
        console.log(i, arrNum3[i]);
    }
}

// // 5. перебрати циклом while та вивести  числа тільки парні  значення

while (i <= arrNum3.length - 1) {
    if (arrNum3[i] % 2 === 0) {
        console.log(arrNum3[i]);
    }
    i++;
}

// // 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let num of arrNum3) {
    if (num % 2 === 0) {
        console.log(num);
    }
}


// // 7. замінити кожне число кратне 3 на слово "okten"

for (let num = 0; num <= arrNum3.length - 1; num++) {
    if (arrNum3[num] % 3 === 0) {
        arrNum3[num] = "okten";
    }
}
console.log(arrNum3);

// 8. вивести масив в зворотньому порядку.

let arrMir = [];
for (let w = arrNum3.length - 1; w >= 0; w--) {
    arrMir[w] = arrNum3.shift(w);
}
arrNum3 = arrMir;
console.log(arrNum3);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//     1.b перебрати його циклом while

let q = arrNum3.length - 1;
while (q >= 0) {
    console.log(arrNum3[q]);
    q--;
}

//     2.b перебрати його циклом for

for (i = arrNum3.length - 1; i >= 0; i--) {
    console.log(arrNum3[i]);
}

//     3.b перебрати циклом while та вивести  числа тільки з непарним індексом

let nu1 = arrNum3.length - 1;
while (nu1 >= 0) {
    if (nu1 % 2 !== 0) {
        console.log(nu1, arrNum3[nu1]);
    }
    nu1--;
}

//     4.b перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = arrNum3.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(i, arrNum3[i]);
    }
}

// 5.b перебрати циклом while та вивести  числа тільки парні  значення


while (i >= 0) {
    if (arrNum3[i] % 2 === 0) {
        console.log(arrNum3[i]);
    }
    i--;
}

// 6.b перебрати циклом for та вивести  числа тільки парні  значення

for (let num = arrNum3.length - 1; num >= 0; num--) {
    if (arrNum3[num] % 2 === 0) {
        console.log(arrNum3[num]);
    }
}

// 7.b замінити кожне число кратне 3 на слово "okten"

for (let num = arrNum3.length - 1; num >= 0; num--) {
    if (arrNum3[num] % 3 === 0) {
        arrNum3[num] = "okten";
    }
    console.log(num, arrNum3[num]);
}
console.log(arrNum3);

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.

let arrNum4 = [];
for (let num4 = 0; ; num4++) {
    if (num4 % 2 === 0) {
        arrNum4.push(num4)
        if (arrNum4.length === 50) {
            break;
        }
    }
}
console.log(arrNum4);

// - заповнити його 50 непарними числами за допомоги циклу.

let arrNum5 = [];
for (let num4 = 0; ; num4++) {
    if (num4 % 2 !== 0) {
        arrNum5.push(num4);
        if (arrNum5.length === 50) {
            break;
        }
    }
}
console.log(arrNum5);

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let getArrNum1 = [];
for (let getNum1 = 0; ; getNum1 += 2) {
    getArrNum1.push(getNum1);
    if (getArrNum1.length === 50) {
        break;
    }
}
console.log(getArrNum1);

//     b. заповнити його 50 непарними числами за допомоги циклу.

let getArrNum2 = [];
for (let getNum2 = 1; ; getNum2 += 2) {
    getArrNum2.push(getNum2);
    if (getArrNum2.length === 50) {
        break;
    }
}
console.log(getArrNum2);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let getArrRandom = [];
for (let r = 0; ; r++) {
    let getNumRandom = Math.random(r);
    getArrRandom.push(getNumRandom);
    if (getArrRandom.length === 20) {
        break;
    }
}
console.log(getArrRandom);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let getArrRandom1 = [];
let getNumRandom1;
for (let r = 0; ; r++) {
    let getNumRandomin = 8;
    let getNumRandomax = 732;
    getNumRandom1 = Math.round(Math.random(r) * (getNumRandomax - getNumRandomin + 1) + getNumRandomin);
    getArrRandom1.push(getNumRandom1);
    if (getArrRandom1.length === 20) {
        break;
    }
}
console.log(getArrRandom1);

// // 2. Вивести за допомогою console.log кожен третій елемен

for (i = 2; i <= getArrRandom1.length - 1; i += 3) {
    console.log(getArrRandom1[i]);
}
console.log(' ');
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (i = 2; i <= getArrRandom1.length - 1; i += 3) {
    if (getArrRandom1[i] % 2 === 0) {
        console.log(getArrRandom1[i]);
    }
}
console.log(' ');
// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let getArrRandomNew = [];
for (i = 2; i <= getArrRandom1.length - 1; i += 3) {
    if (getArrRandom1[i] % 2 === 0) {
        console.log(getArrRandom1[i]);
        getArrRandomNew.push(getArrRandom1[i]);
    }
}
console.log(getArrRandomNew);
console.log(' ');

// // 5. Вивести кожен елемент масиву, сусід справа якого є парним

for (i = 0; i <= getArrRandom1.length - 1; i++) {
    if (getArrRandom1[i] % 2 === 0 && i !== 0) {
        console.log(getArrRandom1[i - 1]);
    }

}

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arrTab = [100, 250, 50, 168, 120, 345, 188];
let sumMid = 0;
for (i = 0; i <= arrTab.length - 1; i++) {
    sumMid += arrTab[i];
}
sumMid = sumMid / arrTab.length;
console.log(sumMid);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let getArrRandom2 = [];
let getNumRandom2;
let arrMultiplication = [];
for (let r = 0; ; r++) {
    let getNumMin = 4;
    let getNumMax = 44;
    getNumRandom2 = Math.round(Math.random(r) * (getNumMax - getNumMin + 1) + getNumMin);
    getArrRandom2.push(getNumRandom2);
    if (getArrRandom2.length === 30) {
        break;
    }
}
console.log(getArrRandom2);
for (let elemRandom2 of getArrRandom2) {
    let getElemMultip = elemRandom2 * 5;
    arrMultiplication.push(getElemMultip);
}
console.log(arrMultiplication);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arrMix4 = [1, 'a', true, 2, 's', false, 3, 4, 'd', 5, 6,];
let arrTypNum = [];
for (let element of arrMix4) {
    if (typeof (element) === "number") {
        arrTypNum.push(element)
    }

}
console.log(arrTypNum);


//     ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arrDop1 = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i < arrDop1.length; i++) {
    word += arrDop1[i];
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let worldWhile = '';
let k = 0;
while (k < arrDop1.length) {
    worldWhile += arrDop1[k];
    k++;
}
console.log(worldWhile);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


let wordOff = '';
for (str of arrDop1) {
    wordOff += str;
}
console.log(wordOff);