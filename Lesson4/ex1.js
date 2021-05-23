/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны 
единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

"use strict";

console.log('Задание 1')

function numberToObgect(num) {
    let numbersList = {};
    const names = ['units', 'tens', 'hundreds'];
    let i = 0;

    if ((num > 999) || (num < 0) || (isNaN(num))) {
        console.log('Данное число выходит за рамки допустимого диапазона!');
    }
    else {
        while (i < 3) {
            let result = num % 10;
            num = Math.floor(num / 10);

            numbersList[names[i++]] = 0 + result;
        }

    }
    return numbersList;
}



// let userNumber = +prompt('Введите число от 0 до 999');

// console.log(numberToObgect(userNumber));

console.log(numberToObgect(123));
