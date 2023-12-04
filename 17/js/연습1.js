
// const price = document.querySelector('.money');


let price = 10000;
let counter = 1;
const count = document.querySelector('.count');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
// const money = document.querySelector('.money');
const amount = document.querySelector('.total');
const totalGoods = document.querySelector('.total_price');
const totalPay = document.querySelector('.total_pay');




function changePrice(event) {
    const change = event.target.className;
    // console.log(change);
    if(change === "plus"){
        changePriceUp();
    } else{
        changePriceDown();
    }
}

function changePriceUp() {
    if(counter >= 10){
        return;
    }
    add();
    Price();
}
function changePriceDown(){
    if(counter <= 1){
       return;
    }
    remove();
    Price();
}
function add() {
    counter++;
}
function remove() {
    counter--;
}

function Price() {
    count.innerText = counter;
    // money.innerText = `금액 : ${price * counter}원`;
    amount.innerText = `합계 : ${price * counter}원`;
    totalGoods.innerText = `총 상품금액 : ${price * counter} 원`;
    totalPay.innerText =`총 결제금액 : ${price * counter -4500} 원`;
}
minus.addEventListener('click', changePrice);
plus.addEventListener('click', changePrice);



























// function minusBtn(event) {
//     if(counter === 0){
//         counter = 1;
//     }
//     counter -= 1;
//     count.innerText = counter;
//
// }
//
// function plusBtn(event) {
//     if(counter === 10){
//         counter = 9;
//     }
//     counter += 1;
//     count.innerText = counter;
// }
//
// function Price() {
//     amount.innerText = price * counter + "원";
//     money.innerText = price * counter + "원";
// }
//
// const foo = () => {
//     plusBtn();
//     Price();
// };






// const textContentOutput = document.querySelector("#textContentOutput");
// const innerTextOutput = document.querySelector("#innerTextOutput");
//
//
// const str1 = "안녕하세요";
// console.log(textContentOutput.textContent); // 해당 요소의 내부 데이터를 가져온다.
// console.log(innerTextOutput.innerText); // 22
//
//
// // textContent html 요소의 모든 문자를 가져온다(비용이 싸다)
// // textContentOutput.textContent = "안녕하세요1";
//
// // innerText 는 화면에 기재된 텍스트만 가져온다.(비싸다)
// innerTextOutput.innerText = "안녕하세요2";