


// 변수

// let, const

let a;
a = 300;
const name = "홍길동";

// 2. 자료형
// 원시타입
// number, string, boolean, null, undefined, bigint, symbol
// 1) number type: NaN
// 2) template literal
// 3) boolean: true, false
// 4) null, undefined;



//비원시타입
// object
// array, function

const country = prompt("국가코드를 입력하세요");

if(country === "ko") {
    console.log("김치볶음밥");
} else if(country === "usa") {
    console.log("피자");
} else if(country === "jp") {
    console.log("스시");
} else if (country === "tu") {
    console.log("케밥");
} else {
console.log("미분류");
}
