// console.log(1);
const userName = "홍길동";
const userAge = 30;
console.log(userName);
console.log(userAge);

let taskA;
let taskB;
taskA = "작업";
taskB = taskA;
console.log(taskB);

const birthday = "1234.12.34";
const codeName = 'hiMedia';

let a = 100;
let b = 200;
let c = a;

a = b;
b = c;

console.log(a);
console.log(b);

// const width = '200px';
// const height = '100px';
// const bg = 'orange';
const box = document.querySelector('.box');

// box.style.cssText = `width: ${width}; height: ${height}; background: ${bg}`;
box.style.cssText = `width: 100px; height: 200px; background: red;`;

