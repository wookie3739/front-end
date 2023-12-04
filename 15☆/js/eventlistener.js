

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
// const btn4 = document.querySelector('.b1');
// const btn5 = document.querySelector('.b2');
// const btn6 = document.querySelector('.b3');
const coffee = document.querySelector('.coffee');
// let americano = 3000;
// let latte = 4000;
// let mocca = 5000;
// let price = 0;
let total = 0;
const common = (event) => {
    const coin = event.target.id; // 우리가 버튼을 클릭한 아이디의 문자를 가져와준다.
    console.log(event.target.id);
    if(coin === "coin500"){
        total += 500;
    } else if(coin === "coin1000"){
        total += 1000;
    } else {
        total += 5000;
    }
    alert(`${total}원이 추가되었습니다.`);
};


// --------------- dataset(사용자 함수)-----------------------
// const common = (event) => {
//     const coin = +event.target.dataset.total; // 문자 형태를 숫자 형태로 변환해야함.
//     total += coin;
//     alert(`${total}원이 추가되었습니다.`);
// }// -----------------------------------------------------
// 사용자 함수를 쓰기 위해서는 html에서 data- 함수의 형태로 만들어야한다.
// data-의 뒷 부분 (함수 = "";)






btn1.addEventListener("click", common); // 500원씩 증가
btn2.addEventListener("click", common); // 1000원씩 증가
btn3.addEventListener("click", common); // 5000원씩 증가

coffee.addEventListener('click', () =>{
    if(total >= 5000){
        alert(`아무 품목을 골라 구매하세요.`);
    } else if(total >= 4000){
        alert(`아메리카노와 카페라떼를 구매할 수 있습니다.`);
    } else if(total >= 3000){
        alert(`아메리카노를 구매할 수 있습니다.`);
    } else{
        alert(`구매할 수 없습니다.`);
    }
});
// btn1.addEventListener('click', () =>{
//     price += 500;
//     total = price;
//     alert(`${total}원이 추가되었습니다.`);
// });
// btn2.addEventListener('click', () =>{
//     price += 1000;
//     total = price;
//     alert(`${total}원이 추가되었습니다.`);
// });
// btn3.addEventListener('click', () =>{
//     price += 5000;
//     total = price;
//     alert(`${total}원이 추가되었습니다.`);
// });


// btn4.addEventListener('click', () =>{
//     total -= americano;
//     alert(`잔액은 ${total}원 입니다.`);
//     if(total<3000){
//         alert("더 이상 구매 불가합니다.");
//     }
// });
//
// btn5.addEventListener('click', () =>{
//     total -= latte;
//     alert(`잔액은 ${total}원 입니다.`);
//     if(total<4000){
//         alert("더 이상 구매 불가합니다.");
//     }
// });
//
// btn6.addEventListener('click', () =>{
//     total -= mocca;
//     alert(`잔액은 ${total}원 입니다.`);
//     if(total<5000){
//         alert("더 이상 구매 불가합니다.");
//     }
// });












































// const box1 = document.querySelector('#box1');
// const box2 = document.querySelector('#box2');
// const box3 = document.querySelector('#box3');
// const a = (event) => {
//     event.target.style.border = "1px solid red";
// };
//
// const b = (event) => {
//     event.target.style.background = "red";
// };
//
// const c = (event) => {
//     event.target.style.background = "blue";
// };
// box1.addEventListener("click", a);
// box2.addEventListener("click", b);
// box3.addEventListener("click", c);
