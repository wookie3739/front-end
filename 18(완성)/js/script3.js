
const americanoUp = document.querySelector("#americanoUp");
const americanoDown = document.querySelector("#americanoDown");

const latteUp = document.querySelector("#latteUp");
const latteDown = document.querySelector("#latteDown");




// 결제 정보 영역
const paymentInfo = document.querySelector(".paymentInfo");
const totalAmount = paymentInfo.querySelector(".totalAmount strong");
const totalPayment = paymentInfo.querySelector(".totalPayment strong");
const deliveryMoney = paymentInfo.querySelector(".deliveryMoney strong");
const saleMoney = paymentInfo.querySelector(".saleMoney strong");

const toMoney = (number) => `${number.toLocaleString()}원`;

const renderLocalAmount = (selector, amount) => {
	selector.innerText = toMoney(amount);
};

const renderPaymentInfo = (data, skip = true) => {
	const amount = data.americano + data.latte;
	totalAmount.innerText = toMoney(amount);
	totalPayment.innerText = toMoney(amount - data.sale + data.delivery);

	if (skip) return;
	saleMoney.innerText = toMoney(data.sale);
	deliveryMoney.innerText = toMoney(data.delivery);
};

const productInfo = {
	americano : 10000,
	latte : 20000,
	sale: 10000,
	delivery: 5500,
};

const updateCart = (product, type, price) => {

	// americano, latte 찍으면 product 로 들어가서 INPUT 실행.
	// 여기서 `#${product}Input`은 html id
	const INPUT = `#${product}Input`;


	// #americanoAmount or #latteAmount 를 AMOUNT 에 저장
	const AMOUNT = `#${product}Amount strong`;

	const inputElem = document.querySelector(INPUT);
	const amountElem = document.querySelector(AMOUNT);

	let quantity = +inputElem.value;

	switch (type) {
		case "INCREMENT":
			if (quantity >= 10) {
				alert("구매 가능한 최대 수량입니다.");
				return;
			}
			quantity = quantity + 1;
			break;
		case "DECREMENT":
			if (quantity <= 1) {
				alert("구매 가능한 최소 수량입니다.");
				return;
			}
			quantity = quantity - 1;
			break;
		default:
			alert(`TYPE ERROR : ${type}`);
			return;
	}

	inputElem.value = quantity;
	productInfo[product] = quantity * price;
	renderLocalAmount(amountElem, productInfo[product]);
	renderPaymentInfo(productInfo);
};

renderLocalAmount(document.querySelector("#americanoAmount strong"), productInfo.americano);
renderLocalAmount(document.querySelector("#latteAmount strong"), productInfo.latte);
renderPaymentInfo(productInfo, false);

americanoUp.addEventListener("click", () => {
	updateCart("americano", "INCREMENT", 10000);
});
americanoDown.addEventListener("click", () => {
	updateCart("americano", "DECREMENT", 10000);
});

latteUp.addEventListener("click", () => {
	updateCart("latte","INCREMENT", 20000);
});
latteDown.addEventListener("click", () => {
	updateCart("latte","DECREMENT", 20000);
});











