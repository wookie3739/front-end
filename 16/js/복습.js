// 값으로 넣은 함수는 세미콜론 처리를 해야한다.
//ex> 함수 표현식
// const foo = function () {};
//  this 를 바인딩 하지 않는다.
// hoisting 되지 않는다.

// 객체 리터럴 방식
// const user ={
//     key:value, //합쳐서 프로퍼티라고 부른다.
// };
//
//
// //메서드
//
// const character = {
//     hp:100,
//     mp:300,
//     name: "엔젤릭버스터",
//     attack: function() { // attack(){} 으로 써도된다.
//         console.log(this.name + "공격!");
//     },
//     move: function() {
//         console.log("이동!");
//     },
// };
//
// character.attack();
// character.move();