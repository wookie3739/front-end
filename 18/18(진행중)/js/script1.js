

function foo() {
	const up = document.querySelector("#up");
	const down = document.querySelector("#down");
	const countElem = document.querySelector("#count");
	const amountElem = document.querySelector(".cart .amount strong");


// 결제 정보 영역
	const paymentInfo = document.querySelector(".paymentInfo");
	const totalAmount = paymentInfo.querySelector(".totalAmount strong");
	const totalPayment = paymentInfo.querySelector(".totalPayment strong");
	const deliveryMoney = paymentInfo.querySelector(".deliveryMoney strong");
	const saleMoney = paymentInfo.querySelector(".saleMoney strong");


	let count = 1;


	const renderPaymentInfo = (number) => {
		countElem.innerText = number;
		amountElem.innerText = `${number * 10000}원`;
		totalAmount.innerText = `${number * 10000}원`;
		totalPayment.innerText = `${number * 10000 - 10000 + 5500}원`;
	};

	const increment = () => {
		if (count >= 10) {
			return;
		}
		count++;
		renderPaymentInfo(count);
	};

	const decrement = () => {
		if (count <= 1) {
			return;
		}
		count--;
		renderPaymentInfo(count);
	};

	up.addEventListener("click", increment);
	down.addEventListener("click", decrement);
}
foo();