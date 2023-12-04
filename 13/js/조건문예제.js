// 1번 문제

// const a = prompt("하이미디어?");
// if(a === "하이미디어") {
//    alert("하이미디어 학원에 오신걸 환영합니다.");
// }
// else{
//     alert("정답이 아닙니다.");
// }

// //2번 문제
// const b = +prompt("숫자를 입력하세요");
// if(b > 0){
//     alert("1");
// }
// else if(b < 0){
//     alert("-1");
// }
// else{
//     alert("0");
// }

//3번 문제
const c = prompt("누구세요");
if(c === "학생"){
    alert("환영합니다.");
}
else if(c === "직원"){
    alert("안녕하세요.");
}
else if(c === "방문자"){
    alert("어서오세요");
}
else {
    if(c === ""){
        alert("입력된 내용이 없습니다.");
    }
    else{
        alert("우리 직원이 아닙니다.");
    }
}
