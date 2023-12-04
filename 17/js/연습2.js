
// const price = document.querySelector('.money');


let price = 10000;
let price_1 = 10000;
let counter = 1;
let counter_1 = 1;
const count = document.querySelectorAll('.count');
const minus = document.querySelectorAll('.minus');
const plus = document.querySelectorAll('.plus');
const amount = document.querySelectorAll('.total');
const totalGoods = document.querySelector('.total_price');
const totalPay = document.querySelector('.total_pay');

// function updateCart = (event) => {
//     const target = event.target.id;
//     let count = +input.value;
//     if(target === "up"){
//         count++;
//     }else{
//         count--;
//     }
//     input.value = count;
// }
// toLocalString(); 숫자를 받으면 ,를 만들어줌
// totalPay.toLocalString();  3,000 55,000 100,000 1,000,000 등


function changePrice(event) {
    const change = event.target.className;
    console.log(change);
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
//=======================================================================================//
function changePrice_1(event) {
    const change_1 = event.target.id;
    console.log(change_1);
    if(change_1 === "plus_1"){
        changePriceUp_1();

    } else{
        changePriceDown_1();
    }
}
function changePriceUp_1() {
    if(counter_1 >= 10){
        return;
    }
    add_1();
    Price_1();
}
function changePriceDown_1(){
    if(counter_1 <= 1){
        return;
    }
    remove_1();
    Price_1();
}
function add_1() {
    counter_1++;
}
function remove_1() {
    counter_1--;
}
function total() {
    totalGoods.innerText = `총 상품금액 : ${(price * counter) + (price_1 * counter_1)}원`;
}
// toLocalString(); 숫자를 받으면 ,를 만들어줌
function total_1() {
    totalPay.innerText =`총 결제금액 : ${(price * counter) + (price_1 * counter_1) -4500} 원`
}
function Price() {
    count[0].innerText = counter;
    amount[0].innerText = `합계 : ${price * counter}원`;
    total();
    total_1();
}
function Price_1(){
    count[1].innerText = counter_1;
    amount[1].innerText = `합계 : ${price_1 * counter_1}원`;
    total();
    total_1();
}

    minus[0].addEventListener('click', changePrice);
    plus[0].addEventListener('click', changePrice);
    minus[1].addEventListener('click', changePrice_1);
    plus[1].addEventListener('click', changePrice_1);




























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