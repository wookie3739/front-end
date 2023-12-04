
// 형변환
// 명시적 형변환, 암묵적 형변환


// 1. 명시적 형변환

// let a = 100;
// let b = String(a);
// console.log(a);
// console.log(b);
//
// let c ="100";
// let d = Number(c);
// console.log(typeof c);
// console.log(typeof d);
//
// let isCheck = true;
// let e = Number(isCheck);
// console.log(e);
//
// let num = 100;
// console.log(Boolean(num)); // 1 // 0일때는 false
//
// // 2. 암묵적 형변환
// console.log(typeof("10" + 20)); // 1020 String 타입
// console.log("10" - 10); // 0
//
// let hi = Boolean("a"); // 0을 제외한 모든 값은 true, 공백포함
// console.log(hi);

// let num = "10";
// console.log(num);
// console.log(Number(num) + 20); // 30
// console.log(+num) // 10
// console.log(+num + 100); // 110
// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * 3);
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log("  -9  " + 5);
// console.log("  -9  " - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("0");
//
// // 빈 문자열, 0, -0, false, null, NaN, undefined
// // 를 제외한 모든 값은 초기값을 true로 설정함.
console.log(Boolean("0"));
console.log(2 / [4,3]);
console.log(4 + []);
console.log([] + 4);

const bar = {
    valueOf: () => 3,
    toString: () => 2
}
console.log([] + bar);
console.log(bar + "2");

let a,b;

let sum = () => a+b;
let sum = function() {
    return a+b;
}
let double = function(n) {
    return n*2;
}


let double = (n) => n*2;
let double = n => n*2;
alert(double(3));



// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// 7 / 0
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1

// 답
// 10 String
// -1 Number
// 1 Number
// 2 Number
// 6 Number
// 9px String
// $45 String
// 2 Number
// nan Number
// infinity Number
// -9  5 String
// -14 Number
// 1 Number
// nan Number
