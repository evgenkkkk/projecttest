// let number = 4.6;

// const persone = 'Alex';

// const bool = true;
// const bool1 = false;


// const obj = {
//     name: 'jone',
//     age: 25,
//     isMArried: false 
// }

// obj['b']='1234'



// console.log(obj.age)
// // console.log(obj['name'])


// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]
// console.log(arr[0]);


"use strict"

// обращение к пользователю
// alert('Hello')

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof (answer));

// отпользователя мы получаем ответ только в виде строки

// const answer = +prompt("Вам есть 18?", "18") с плюсом будет номер

//////////////////////////////////////////////////////////////////////////////////////////////////

// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers); команда не используется, но можно вывести на страничку сайта информацию 

//////////////////////////////////////////////////////////////////////////////////////////////////


// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`); работает только с косыси ковычками

// const user = "Ivan";
// alert(`Hello, ${user}`);

//////////////////////////////////////////////////////////////////////////////////////////////////



// + который ставится перед 5кой назвается - унарным , потому что использует 1 элемент
// console.log(4 + +"5");

// префиксная форма
// постфиксная форма

// let incr = 10,
//     decr = 10;

// incr++; Постфиксаная форма
// decr--;

// ++incr; Префиксная форма, но работает также
// --decr;

// console.log(incr); инкремент
// console.log(decr); декремент

// console.log(++incr); можно занести так, но при этом только в префиксной форме
// console.log(--decr);


// Если 1 раз используется = это называется присваивание
// Если 2 раза используем == проверяем на правду или ложь
// Если мы используем 3 раза === строгое сравнение равенства 
// console.log(2*4 === 8);





// оператор и && (возвращает правду, только когда его значения правдивы)
//  оператор или || (если один из аргументов правдивый, будет правда как итог)
// оператор отрицания знак - ! 

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose);

