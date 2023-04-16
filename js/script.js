function playBtn() {
	console.log("click");
}

const btn = document.getElementById("menuSection");
function descriptionBtn() {
	btn.style.display = "none";
	box.style.display = "block";
}

const box = document.getElementById("box");
box.style.display = "none";
close.style.display = "block";

let close = document.getElementById("closeBtn");
function closeDescriptionBtn() {
	btn.style.display = "block";
	box.style.display = "none";
	close.style.display = "none";
}
