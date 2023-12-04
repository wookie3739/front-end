

// 함수

// function naming(){
//
// }
//
// naming();

// 함수의 네이밍 규칙
// function getMessage() {
//
// }
//
// function showMessage() {}
// function setLayout(){}
// function createUser(){}
// function edit(){}
// function deleteUser(){}
// function calcBox(){}


// function foo(){
//     console.log("재사용 함수");
// }

// function foo2(){
//     return ;
// }

// const num = 100;
// function foo() {
//     console.log(num);
// }

let kor = parseInt(prompt("국어점수를 입력하세요."));
let eng = parseInt(prompt("영어점수를 입력하세요."));
let mat = parseInt(prompt("수학점수를 입력하세요."));

// let sum = kor + eng + mat;
// let avg = sum / 3;
//
// // const totalSum = sumScore(kor, eng, mat);
// function avgScore(){
//     return avg;
// }
//
// function Score(){
//     const totalAvg = avg;
// if (totalAvg >= 90) {
//     return "A학점";
// } else if(totalAvg >= 80){
//     return "B학점";
// } else if(totalAvg >= 70){
//     return "C학점";
// } else if(totalAvg >= 60){
//     return "D학점";
// } else {
//     return "E학점";
// }
// }
// alert(Score());




// function sumScore(a,b,c) {
//     return a + b + c;
// }
// const totalSum = sumScore(kor, eng, mat);
// function avgScore(a,b,c){
//     return sumScore(a,b,c) / 3;
// }
const sumScore = (a,b,c) => a + b + c;
const avgScore = (a,b,c) => sumScore(a,b,c) / 3;
const Score = () => {
    const totalAvg = avgScore(kor, eng, mat);
    let message = "";


    if (totalAvg >= 90) {
        message = "A학점";
    } else if(totalAvg >= 80){
        message = "B학점";
    } else if(totalAvg >= 70){
        message = "C학점";
    } else if(totalAvg >= 60){
        message = "D학점";
    } else {
        message = "E학점";
    }
    return message;

};    alert(Score);

    // -------------- if문만 사용 ----------- //
    // if (totalAvg >= 90) return "A학점";
    // if (totalAvg >= 80) return "B학점";
    // if (totalAvg >= 70) return "C학점";
    // if (totalAvg >= 60) return "D학점";
    //     return "E학점";
















