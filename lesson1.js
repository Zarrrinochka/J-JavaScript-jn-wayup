/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ]) 
*/


let myCity = {
    city: 'tomsk',
    country: 'russia',
    population: 11,
    footballStadium: true,
};

console.log("1.1 ответ: ");
console.log(myCity);

/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/

const height = 40;
const width = 70
let area = height * width;
console.log("1.2 ответ: " + area);

/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/

time = 2;
speedOfFirst = 95;
speedOfSecond = 114;
95 * 2 + 114 * 2
let distances = speedOfFirst * time + speedOfSecond * time;
console.log("1.3 ответ: " + distances);

/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log("1.4 ответ: " + randomNumber + " меньше 20");
} else if (randomNumber > 50) {
    console.log("1.4 ответ: " + randomNumber + " больше 50");
} else if (20 < randomNumber > 50) {
    console.log("1.4 ответ: " + randomNumber + " randomNumber больше 20, и меньше 50")
};


/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

const randomNumber1 = Math.floor(Math.random() * 100);
switch (randomNumber1) {
    case (randomNumber1 < 20): console.log("1.5 ответ: " + randomNumber + " меньше 20");
    break
    case (randomNumber1 > 50): console.log("1.5 ответ: " + randomNumber + " больше 50");
    break
    case (20 < randomNumber1 > 50): console.log("1.5 ответ: " + randomNumber + "  больше 20, и меньше 50");
    break
    default : console.log("1.5 ответ: " + " дефолтное значение = " + randomNumber1);
};
