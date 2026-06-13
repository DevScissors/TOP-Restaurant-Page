const contentDiv = document.querySelector("#content");

export default function menu() {
  const mainPage = document.createElement("div");
  mainPage.classList.add("main-page");
  mainPage.textContent =
    'Migliore Italiano Ristorante(Loosely translated to "Best Italian Restaurant")';
  contentDiv.appendChild(mainPage);
}
