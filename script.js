// DOM QUERIES

const form = document.querySelector(".quiz__form");
const result = document.querySelector(".quiz__resultSection__result");
const score = document.querySelector(".quiz__resultSection__result__score");
const submitBtn = document.querySelector(".btn");
const retryBtn = document.querySelector(".retryBtn");

// ANSWERS

const answers = {
	question_1: "Bola Ahmed Tinubu",
	question_2: "Donald Trump",
	question_3: "Keir Starmer",
	question_4: "Mark Carney",
};

const answerValues = Object.values(answers); // Answer properties in array form

// Event Listeners

form.addEventListener("submit", (e) => {
	e.preventDefault(); // Prevents the reloading default action

	let scoreCounter = 0;

	let submittedAnswers = [
		form.question1.value,
		form.question2.value,
		form.question3.value,
		form.question4.value,
	];

	submittedAnswers.forEach((answer, index) => {
		if (answer === answerValues[index]) {
			scoreCounter += 25;
		} else {
			scoreCounter += 0;
		}
	});

	result.style.display = "block";
	scoreCountDown(scoreCounter);
	scrollTo(0, 0);

	retryBtn.style.display = "block";
	submitBtn.style.display = "none";
	setTimeout(() => {
		alert("Try again by clicking the button below");
	}, 2000);
});

retryBtn.addEventListener("click", (e) => {
	form.reset();
	scrollTo(0, 0);

	retryBtn.style.display = "none";
	submitBtn.style.display = "block";
});

// FUNCTIONS

function scoreCountDown(scoreCounter) {
	let countDown = 0;
	let timer = setInterval(() => {
		if (countDown === scoreCounter) {
			clearInterval(timer);
		} else {
			countDown++;
			score.textContent = `${countDown}%`;
		}
	}, 2);
}
