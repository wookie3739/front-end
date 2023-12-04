//
// hoisting( 끌어올리다)
//
// console.log(a) // undefined;
// var a=100;
// console.log(a); // 100




// 함수

// let width = 100;
// let height = 200;
// let area = width * height;
//
// let width2 = 200;
// let height2 = 200;
// let area2 = width2 * height2;


//함수 선언방식 :  함수 선언문
// function naming() {
//     //실행코드
// }
//
// // 함수 호출
// naming();
//
//
// 매개변수 a, b(파라미터)
// function getArea(a, b) {
//     const width = a;
//     const height = b;
//     const box = document.createElement("div");
//     box.style.cssText = `width: ${width}; height:${height}; background:orange; margin:10px;`;
//     document.body.prepend(box);
// }
// // 인수 a, b
// getArea("100px","200px");
// getArea("200px","200px");
// getArea("300px","300px");

// function f(a,b) {
//     console.log(`${a}는 ${b}라는 기능입니다.`);
// }
//
// f("이 함수는", "콘솔이");
//
//
// 여기 age는 지역변수
// function checkAdult(age) {
//     if(age > 18){
//         console.log("인증 완료되었습니다.");
//     } else {
//         console.log("미성년자는 가입할 수 없습니다.");
//     }
// }
// //여기 age는 전역변수
// const age = +prompt("나이를 입력하세요");
// checkAdult(20);



//
//
// 2. 반환값 return
//     function getMessage(name, age) {
//     const message = `안녕하세요 제 이름은 ${name}이고 나이는 ${age}세 입니다.`;
//     return message;
// }
//     const 나만의인사1 = getMessage("홍길동", 30);
//     const 나만의인사2 = getMessage("손흥민", 34);
//     console.log(나만의인사1);
//     console.log(나만의인사2);
//
// function checkAge(age) {
//     if(age < 18){
//         return;
//     }
//     const message = "홍길동 회원님 가입을 축하드립니다.";
//     alert(message);
//     // return message;
// }
// checkAge(18);
//

// 3. 전역변수와 지역변수
// const num = 100; // 전역변수
// console.log(num); // 1. 100
// function foo() {
//
//     const num = 300; // 지역변수
//     console.log(num); // 3. 300
// }
// console.log(num); // 2. 100
// foo();



console.log(num); // undefined

var num = 10;

console.log(num); // 10

function foo() {

    console.log(num); // undefined

    var num = 20;

    console.log(num);  // 20

    function foo2() {

        var num = 30;

        console.log(num);  // 30
    }
    foo2();
}
foo();


