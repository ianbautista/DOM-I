const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

let secondTensTime = 0;
let secondOnesTime = 0;
let msHundredsTime = 0;
let msTensTime = 0;

const digits = document.querySelector(".digits");

const startTime = function () {
	secondTens.textContent = secondTensTime;
	secondOnes.textContent = secondOnesTime;
	msHundreds.textContent = msHundredsTime;
	msTens.textContent = msTensTime;

	if (secondTensTime < 1) {
		if (secondOnesTime <= 9) {
			if (msHundredsTime < 9) {
				if (msTensTime < 9) {
					msTensTime++;
					msTens.textContent = msTensTime;
				} else {
					msHundredsTime++;
					msTensTime = 0;
					msTens.textContent = msTensTime;
					msHundreds.textContent = msHundredsTime;
				}
			} else {
				msHundredsTime = 0;
				secondOnesTime++;
				secondOnes.textContent = secondOnesTime;
			}
		} else {
			secondOnesTime = 0;
			secondTensTime++;
			secondTens.textContent = secondTensTime;
			digits.style.color = "red";
		}
	}
};

const countDown = function () {
	startTime();
	setTimeout(countDown, 10);
};

countDown();
