// console.log(10 + 10);
//
//
// // 나머지 연산자
// // 피연산자
// console.log(10 % 3);
//
// //거듭제곱 연산자
// console.log(2 ** 2);
//
// //단항연산자
// console.log(+"10"); // number 10
//
// let a = 10;
//
// // 전위형 증감연산자
// console.log(++a); // 11
//
// // 후위형 증감연산자(후위형을 주로 쓴다)
// console.log(a++); // 10
// console.log(a); // 11

// 비교연산자

// console.log(2 > 1); //true
// console.log(2 < 1); //false
// console.log(2 >= 2); //true
//
// //동등연산자
// console.log(10 == "10") //true (타입 판단 x)
// //일치연산자
// console.log(10 === "10") //false (타입 판단 o)
// console.log(10 !== 10) // false
// console.log(10 !== "10") // true
//
// let result = 10>5; // true
// console.log(false === 0) //false
//
// console.log(null > 0); // false
// console.log(null >= 0); // true

// class a{
// constructor(name, age) {
//     this.name=name;
//     this.age=age;
//  }
// }
//
// const per1 = new a("HW", 10);
// const per2 = new a("WH", 25);
//
// console.log(per1.name);
// console.log(per2.age);

class user{
    constructor(name) {
        this.name = name;
    }
    sayHi(){
        alert(this.name);
    }
}

const user1 = new user('Mino');
user1.sayHi();