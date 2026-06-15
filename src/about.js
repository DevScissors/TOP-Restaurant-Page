const contentDiv = document.querySelector("#content");

export default function about() {
  const aboutPageWrapperDiv = document.createElement("div");
  const aboutPageDiv = document.createElement("div");
  const aboutPageTitle = document.createElement("h4");
  const aboutPageWelcomeTitle = document.createElement("p");
  const aboutPageWelcomeParaOne = document.createElement("p");
  const aboutPageWelcomeParaTwo = document.createElement("p");
  const aboutPageWelcomeParaThree = document.createElement("p");
  const aboutPagePhilosophyTitle = document.createElement("p");
  const aboutPagePhilosophyParaOne = document.createElement("p");
  const aboutPageIdealTitle = document.createElement("p");
  const aboutPageIdealParaOne = document.createElement("p");
  const aboutPageJoinTitle = document.createElement("p");
  const aboutPageJoinParaOne = document.createElement("p");
  const aboutPageSignOff = document.createElement("p");

  aboutPageWrapperDiv.classList.add("about-page-wrapper");
  aboutPageDiv.classList.add("about-page-content");
  aboutPageTitle.classList.add("about-page-title", "about-title");
  aboutPageWelcomeTitle.classList.add(
    "about-page-welcome-title",
    "about-title",
  );
  aboutPageWelcomeParaOne.classList.add("welcome-paragraph");
  aboutPageWelcomeParaTwo.classList.add("welcome-paragraph");
  aboutPageWelcomeParaThree.classList.add("welcome-paragraph");
  aboutPagePhilosophyTitle.classList.add("philosophy-title", "about-title");
  aboutPagePhilosophyParaOne.classList.add("philosophy-paragraph");
  aboutPageIdealTitle.classList.add("idea-title", "about-title");
  aboutPageIdealParaOne.classList.add("ideal-paragraph");
  aboutPageJoinTitle.classList.add("join-title", "about-title");
  aboutPageJoinParaOne.classList.add("join-paragraph");
  aboutPageSignOff.classList.add("signoff-text");

  aboutPageTitle.textContent = "About Us";
  aboutPageWelcomeTitle.textContent = "Welcome to Migliore Italiano Ristorante";
  aboutPageWelcomeParaOne.textContent =
    "At Migliore Italiano Ristorante, we believe great food brings people together. Inspired by the warmth of family gatherings and the rich culinary traditions of Italy, our restaurant was created to offer an authentic dining experience where every meal feels like coming home.";
  aboutPageWelcomeParaTwo.textContent =
    "Founded by a family with roots in southern Italy, Migliore Italiano Ristorante combines time-honored recipes with the freshest local ingredients. From hand-crafted pasta and wood-fired pizzas to slow-simmered sauces and house-made desserts, every dish is prepared with care, passion, and respect for tradition.";
  aboutPageWelcomeParaThree.textContent =
    "Our chefs draw inspiration from the diverse regions of Italy, celebrating flavors that have been passed down through generations. Whether you're enjoying a romantic dinner, a family celebration, or a casual lunch with friends, we strive to create memorable moments around the table.";
  aboutPagePhilosophyTitle.textContent = "Our Philosophy";
  aboutPagePhilosophyParaOne.textContent =
    "We believe that exceptional food starts with exceptional ingredients. That's why we source fresh produce, premium meats, imported Italian cheeses, and authentic olive oils whenever possible. Every recipe is crafted to highlight simple, honest flavors that let quality ingredients shine.";
  aboutPageIdealTitle.textContent = "More Than a Meal";
  aboutPageIdealParaOne.textContent =
    "At Migliore Italiano Ristorante, dining is about more than what's on the plate. It's about sharing stories, creating traditions, and enjoying the company of those around you. Our welcoming atmosphere, attentive service, and passion for hospitality reflect the Italian spirit of la dolce vita—the sweet life.";
  aboutPageJoinTitle.textContent = "Join Our Family";
  aboutPageJoinParaOne.textContent =
    "Whether you're a first-time guest or a longtime regular, we're honored to have you at our table. We invite you to relax, savor every bite, and experience the warmth, flavor, and hospitality that make Migliore Italiano Ristorante a beloved gathering place in our community.";
  aboutPageSignOff.textContent =
    "Buon Appetito! We look forward to serving you.";

  aboutPageDiv.append(
    aboutPageTitle,
    aboutPageWelcomeTitle,
    aboutPageWelcomeParaOne,
    aboutPageWelcomeParaTwo,
    aboutPageWelcomeParaThree,
    aboutPagePhilosophyTitle,
    aboutPagePhilosophyParaOne,
    aboutPageIdealTitle,
    aboutPageIdealParaOne,
    aboutPageJoinTitle,
    aboutPageJoinParaOne,
    aboutPageSignOff,
  );
  aboutPageWrapperDiv.appendChild(aboutPageDiv);
  contentDiv.appendChild(aboutPageWrapperDiv);
}
