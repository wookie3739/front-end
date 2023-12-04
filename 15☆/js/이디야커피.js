
const coin500 = document.querySelector("#coin500");
const coin1000 = document.querySelector("#coin1000");
const coin5000 = document.querySelector("#coin5000");
const selectBtn = document.querySelector("#selected");
let price = 0;

selectBtn.addEventListener("click", () => {
	if (price >= 5000) {
		alert("모든 음료 선택 가능");
	} else if (price >= 4000) {
		alert("아메리카노, 카페라떼 선택 가능");
	} else if (price >= 3000) {
		alert("아메리카노 선택 가능");
	} else {
		alert("선택 가능한 음료가 없습니다.");
	}
});

// 3. 하나의 함수를 공통적으로 사용한다.
function showCurrentCoin(event) {
	const currentCoin = +event.target.dataset.price;
	price = price + currentCoin; // 이 코드는 price += currentCoin 축약가능합니다.
	alert(`${price}원 넣었습니다.`);
}

coin500.addEventListener("click", showCurrentCoin);
coin1000.addEventListener("click", showCurrentCoin);
coin5000.addEventListener("click", showCurrentCoin);



// 2. 모든 버튼에 각각 재사용 가능한 함수를 추가해서 호출한다.
// function showMessage(currentCoin) {
// 	price = price + currentCoin;
// 	alert(`${price}원 넣었습니다.`);
// }
// coin500.addEventListener("click", () => {
//     showMessage(500);
// });
// coin1000.addEventListener("click", () => {
//      showMessage(1000);
// });
// coin5000.addEventListener("click", () => {
//      showMessage(5000);
// });




// 1. 모든 버튼에 각각 함수를 넣는다.
// coin500.addEventListener("click", () => {
//  price = price + 500;
// 	alert(`${price}원 넣었습니다.`);
// });
// coin1000.addEventListener("click", () => {
//  price = price + 1000;
// 	alert(`${price}원 넣었습니다.`);
// });
// coin5000.addEventListener("click", () => {
//  price = price + 5000;
// 	alert(`${price}원 넣었습니다.`);
// });






