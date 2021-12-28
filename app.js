const calcDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

const sendNumberValue = (number) => () => {
	const displayValue = calcDisplay.textContent;
	calcDisplay.textContent =
		displayValue === '0' ? number : displayValue + number;
};

const addDecimal = () => {
	if (!calcDisplay.textContent.includes('.')) {
		calcDisplay.textContent = calcDisplay.textContent + '.';
	}
};

console.log(inputBtns);

inputBtns.forEach((btn) => {
	console.log(btn);
	console.log(btn.value);

	if (btn.classList.length === 0) {
		btn.addEventListener('click', sendNumberValue(btn.value));
	} else if (btn.classList.contains('operator')) {
		btn.addEventListener('click', sendNumberValue(btn.value));
	} else if (btn.classList.contains('decimal')) {
		btn.addEventListener('click', addDecimal);
	}
});

// reset display

const resetAll = () => (calcDisplay.textContent = '0');
clearBtn.addEventListener('click', resetAll);
