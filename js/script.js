const menuPlayBtn = document.getElementById("menu-play-btn");
const difficultySection = document.getElementById("difficulty-section");
const descriptionBtn = document.getElementById("description-btn");
const description = document.getElementById("description-section");
const img = document.getElementById("img");

menuPlayBtn.addEventListener("click", () => {
	if (difficultySection.style.display === "block") {
		description.style.display = "none";
		img.style.display = "none";
	} else {
		difficultySection.style.display = "block";
	}
});

descriptionBtn.addEventListener("click", () => {
	if (description.style.display === "block") {
		descriptionBtn.innerHTML = "Description";
		description.style.display = "none";
		img.style.display = "block";
	} else {
		descriptionBtn.innerHTML = "Close description";
		description.style.display = "block";
		img.style.display = "none";
	}
});
