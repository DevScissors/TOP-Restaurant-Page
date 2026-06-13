const contentDiv = document.querySelector("#content");

export default function homePage() {
	const homeDiv = document.createElement("div");
	homeDiv.classList.add("home-content");
	homeDiv.textContent = 'Migliore Italiano Ristorante (Loosely translated to "Best Italian Restaurant")';
	contentDiv.appendChild(homeDiv);
}
