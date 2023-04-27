const menuSection = document.getElementById("menu-section");
const menuPlayBtn = document.getElementById("menu-play-btn");
const description = document.getElementById("description-section");
const descriptionBtn = document.getElementById("description-btn");
const img = document.getElementById("img");
const difficultySection = document.getElementById("difficulty-section");
const btnEasy = document.getElementById("btn-easy");
const btnMedium = document.getElementById("btn-medium");
const btnHard = document.getElementById("btn-hard");
const gameBoard = document.getElementById("game-board");

menuPlayBtn.addEventListener("click", () => {
	if (difficultySection.style.display === "block") {
		menuPlayBtn.innerHTML = "Play";
		description.style.display = "none";
		img.style.display = "block";
		difficultySection.style.display = "none";
	} else {
		menuPlayBtn.innerHTML = "Menu";
		description.style.display = "none";
		descriptionBtn.innerHTML = "Description";
		img.style.display = "none";
		difficultySection.style.display = "block";
	}
});

descriptionBtn.addEventListener("click", () => {
	if (description.style.display === "block") {
		descriptionBtn.innerHTML = "Description";
		description.style.display = "none";
		img.style.display = "block";
	} else {
		menuPlayBtn.innerHTML = "Play";
		descriptionBtn.innerHTML = "Menu";
		description.style.display = "block";
		img.style.display = "none";
		difficultySection.style.display = "none";
	}
});

btnEasy.addEventListener("click", () => {
	menuSection.style.display = "none";
	description.style.display = "none";
	difficultySection.style.display = "none";

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			let element = document.createElement("div");
			gameBoard.appendChild(element);
			element.className = "my-class";
			element.setAttribute("data-row", i);
			element.setAttribute("data-col", j);
		}
		let breaker = document.createElement("div");
		gameBoard.appendChild(breaker);
		breaker.className = "clear";
	}
});

btnMedium.addEventListener("click", () => {
	console.log("medium");
});

btnHard.addEventListener("click", () => {
	console.log("hard");
});
