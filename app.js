const calcDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

const sendNumberValue = (number) => () => {
	if (awaitingNextValue) {
		calcDisplay.textContent = number;
		awaitingNextValue = false;
	} else {
		const displayValue = calcDisplay.textContent;
		calcDisplay.textContent =
			displayValue === '0' ? number : displayValue + number;
	}
};

const addDecimal = () => {
	if (awaitingNextValue) return;
	if (!calcDisplay.textContent.includes('.')) {
		calcDisplay.textContent = calcDisplay.textContent + '.';
	}
};

const useOperator = (operator) => () => {
	const currentValue = Number(calcDisplay.textContent);
    // prevent multiple operator pushes
    if(operatorValue && awaitingNextValue) return;
	if (!firstValue) {
		firstValue = currentValue;
	} else {
		console.log(firstValue, operatorValue, currentValue);
	}
	//
	awaitingNextValue = true;
	operatorValue = operator;
};


inputBtns.forEach((btn) => {

	if (btn.classList.length === 0) {
		btn.addEventListener('click', sendNumberValue(btn.value));
	} else if (btn.classList.contains('operator')) {
		btn.addEventListener('click', useOperator(btn.value));
	} else if (btn.classList.contains('decimal')) {
		btn.addEventListener('click', addDecimal);
	}
});

// reset display

const resetAll = () => {
	firstValue = 0;
	operatorValue = '';
	awaitingNextValue = false;
	calcDisplay.textContent = '0';
};
clearBtn.addEventListener('click', resetAll);
