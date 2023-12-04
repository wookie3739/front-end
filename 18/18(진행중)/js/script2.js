const up = document.querySelector("#up");
const down = document.querySelector("#down");

const amountElem = document.querySelector(".cart .amount strong");

// 결제 정보 영역
const paymentInfo = document.querySelector(".paymentInfo");
const totalAmount = paymentInfo.querySelector(".totalAmount strong");
const totalPayment = paymentInfo.querySelector(".totalPayment strong");
const deliveryMoney = paymentInfo.querySelector(".deliveryMoney strong");
const saleMoney = paymentInfo.querySelector(".saleMoney strong");

const input = document.querySelector(".quantity input");


const toMoney = (number) => `${number.toLocaleString()}원`;

console.log(toMoney(50000));

const renderPaymentInfo = (amount) => {
	amountElem.innerText = toMoney(amount);
	totalAmount.innerText = toMoney(amount);
	totalPayment.innerText = toMoney(amount-10000+5500);
};


const updateCart = (type, price) => {
	let count = +input.value;
	switch (type) {
		case "INCREMENT":
			if (count >= 10) {
				alert("구매 가능한 최대 수량입니다.");
				return;
			}
			count = count + 1;
			break;
		case "DECREMENT":
			if (count <= 1) {
				alert("구매 가능한 최소 수량입니다.");
				return;
			}
			count = count - 1;
			break;
		default:
			alert(`TYPE ERROR : ${type}`);
			return;
	}
	input.value = count;
	const amount = count * price;
	renderPaymentInfo(amount);
};

up.addEventListener("click", () => {
	updateCart("INCREMENT", 10000);
});

down.addEventListener("click", () => {
	updateCart("DECREMENT", 10000);
});













