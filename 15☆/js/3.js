

// 객체 생성자 방식
// const Person = new Object({
//     a: 10,
//     b: 20,
//     c: 30,
// });
//
// //객체 리터럴 방식
// const person = {
//     key1: "value",  // property
//     key2: "value2",
//     key3: true,
//     key4: function() {},
//     key5: null,
//     key6: {}
// };

// 객체 프로퍼티에 접근방법

// 1. 점 표기법

// console.log(person.key1);
// console.log(person.key2);
// console.log(person.key3);
// console.log(person.key4);
// console.log(person.key5);
// console.log(person.key6);

// 2. 대괄호 표기법

// console.log(Person["key1"]);
// console.log(person["key2"]);
// console.log(person["key3"]);
// console.log(person["key4"]);
// console.log(person["key5"]);
// console.log(person["key6"]);

// 객체 프로퍼티 추가, 변경, 삭제

// const person = {
//     name: "홍길동",
//     age: 30,
// };
//
// person.gender = "남성";  // 바로 뒤로 추가
// person.location = "서울"; // 바로 뒤로 추가
// person.age = 50; // age가 50으로 바뀐다.
// person.name = "손흥민";
//
// console.log(person);
//
// delete person.age; // 삭제
// person.name = null; // 삭제(이 방식을 주로 쓴다)
//
// console.log(person);

// 객체 프로퍼티 여부
//
// const person = {
//     name: "홍길동",
//     age: 30,
// };
//
// const a = prompt("객체의 키를 작성하세요");
// console.log(person[a]); // name, age 키 사용가능
//
//
// console.log("name" in person); // 내부 확인
// console.log("age" in person);  // 내부 확인


// function makeUser(name, age) {
//     const obj = {
//         name: name,
//         age: age,
//         gender: "남성",
//     };
//     return obj;
// }

// ------------------둘이 같음-----------------------
// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//         gender: "남성",
//     };
// }

// const makeUser = (name, age) => ({
//     name,
//     age,
//     gender: "남성"
// })
// -------------소괄호를 사용해야함--------------------
//
//
//
//
// const newUser1 = makeUser("홍길동", 30);
// const newUser2 = makeUser("손흥민", 34);
// const newUser3 = makeUser("황희찬", 35);
// console.log(newUser1);
// console.log(newUser2);
// console.log(newUser3);


const getMessage = (user) => `안녕하세요 제 이름은 ${user.name}이고 나이는 ${user.age}입니다.`;
const user = {
    name: "홍길동",
    age: 30,
};

const hello = getMessage(user); // user 대신 {} 여기서 객체를 만들어도 가능
console.log(hello);



