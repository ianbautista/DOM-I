const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

let secondTensNum = 0;
let secondOnesNum = 0;
let msHundredsNum = 0;
let msTensNum = 0;

let baseTime = 0;

// secondTens.textContent = secondTensNum;
// secondOnes.textContent = secondOnesNum;
// msHundreds.textContent = msHundredsNum;
// msTens.textContent = msTensNum;

// const startTime = function () {
// 	msTensNum = msTensNum + 1;
// 	msTens.textContent = msTensNum;
// };

const addTime = function () {
	msTensNum = msTensNum + 1;
	msTens.textContent = msTensNum;
	if (msTensNum == 9) {
		msHundredsNum = msHundredsNum + 1;
		msHundreds.textContent = msHundredsNum;
		if (msHundredsNum == 9) {
			secondOnesNum = secondOnesNum + 1;
			secondOnes.textContent = secondOnesNum;
			if (secondOnesNum == 9) {
				secondTensNum = secondTensNum + 1;
				secondTens.textContent = secondTensNum;
			}
		}
	}
};

const countdown = function () {
	window.setInterval(addTime(), 10);
};

console.log(countdown());
