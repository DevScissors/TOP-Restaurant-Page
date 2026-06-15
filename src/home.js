const contentDiv = document.querySelector("#content");

export default function homePage() {
  const homeTitleDiv = document.createElement("div");
  const homeMissionDiv = document.createElement("div");
  const homeHoursWrapperDiv = document.createElement("div");
  const homeHoursTitle = document.createElement("h4");
  const homeHoursDiv = document.createElement("div");

  homeTitleDiv.classList.add("home-page-content-title");
  homeMissionDiv.classList.add("home-page-mission");
  homeHoursWrapperDiv.classList.add("home-page-hours-wrapper");
  homeHoursTitle.classList.add("home-page-hours-title");
  homeHoursDiv.classList.add("home-page-hours");

  homeTitleDiv.textContent = "Migliore Italiano Ristorante";
  homeMissionDiv.textContent =
    "It has been said that we have the best italian food in the states. Our chefs originate from Italy to bring you the most authentic italian food you can find on this side of the water.";
  homeHoursTitle.textContent = "Hours:";
  homeHoursDiv.textContent = "Mon-Sat: 8:00am - 9:00pm and Closed on Sunday";

  homeHoursWrapperDiv.append(homeHoursTitle, homeHoursDiv);
  contentDiv.append(homeTitleDiv, homeMissionDiv, homeHoursWrapperDiv);
}
