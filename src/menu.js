const contentDiv = document.querySelector("#content");

class MenuItem {
  constructor(name, description, price, category) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}

const menuItems = [
  [
    "Meatball Pasta",
    "A pasta with meatballs in a spicy marinara sauce with angel hair spaghetti",
    "$21.99",
    "pasta",
  ],
  [
    "Chicken Alfredo Pasta",
    "An authentic grilled to perfection chicken with fettucine noodles in our perfected homemade alfredo sauce",
    "$23.99",
    "pasta",
  ],
  [
    "Shrimp in Lobster Pasta",
    "Delciious grilled shrimp with farfalle noodles in a lobster cream sauce",
    "$28.99",
    "pasta",
  ],
  [
    "Grilled Chicken Salad",
    "A pasta with meatballs in a spicy marinara sauce with angel hair spaghetti",
    "$18.99",
    "salad",
  ],
  [
    "House Salad",
    "Our traditional house salad in our homemade italian dressing with fresh croutons",
    "$14.99",
    "salad",
  ],
  [
    "Caesar Salad",
    "A creamy ceasar dressing with fresh croutons",
    "$15.99",
    "salad",
  ],
  [
    "Spicy Soppressata Pizza",
    "Enjoy a pizza with spicy soppressata, with some hot honey drizzled on top",
    "$22.99",
    "pizza",
  ],
  [
    "Meat Lovers Pizza",
    "For those who love meat this pizza has pepperioni, sausage, bacon, and our famous grilled chicken",
    "$25.99",
    "pizza",
  ],
  [
    "Veggie Pizza",
    "A veggie pizza with onions, black olives, green and red bell peppers",
    "$19.99",
    "pizza",
  ],
];

export default function menu() {
  const menuWrapperDiv = document.createElement("div");
  menuWrapperDiv.classList.add("menu-page-wrapper");

  menuItems.forEach((itemArray) => {
    const [name, description, price, category] = itemArray;
    const menuListItem = new MenuItem(name, description, price, category);

    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-page-item");
    menuItemDiv.dataset.category = menuListItem.category;

    const title = document.createElement("h4");
    title.textContent = menuListItem.name;

    const desc = document.createElement("p");
    desc.textContent = menuListItem.description;

    const cost = document.createElement("p");
    cost.textContent = menuListItem.price;

    menuItemDiv.append(title, desc, cost);
    menuWrapperDiv.appendChild(menuItemDiv);
  });

  contentDiv.appendChild(menuWrapperDiv);
}
