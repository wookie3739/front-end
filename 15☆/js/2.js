// const foo = function() {
//     console.log("두 번째 표현식 함수")
// };
// foo();
//
// // 3개 전부 같다.
// const fun1 = function() {
//     return "함수입니다."
// };
// const fun1 = () => "함수입니다."; // 한 줄 일 때.
// const fun1 = () => {
//     return "함수입니다.";
// }
//
// const fun2 = a => a; // 매개변수가 하나일 때 소괄호도 삭제가능 + 중괄호도 한 줄이면 삭제가능



const test1 = () => new Date();
const test2 = a => a * a;
const test3 = (a, b) => a + b;
const test4 = (a, b) => console.log(a * b);
const test5 = a => {
    const name = a;
    const age = 30;
    return `이름은 ${name}, 나이는 ${age}세 입니다.`;
};
