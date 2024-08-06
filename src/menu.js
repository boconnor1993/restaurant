const menuItems = [
  { name: 'Margherita Pizza', imgSrc: require('./assets/margherita.jpg'), description: 'Classic pizza with tomatoes, mozzarella, and basil.', price: '$12.99' },
  { name: 'Pepperoni Pizza', imgSrc: require('./assets/pepperoni.jpg'), description: 'Pepperoni, mozzarella, and tomato sauce.', price: '$14.99' },
  { name: 'BBQ Chicken Pizza', imgSrc: require('./assets/bbq_chicken.jpg'), description: 'Grilled chicken, BBQ sauce, and onions.', price: '$15.99' },
  { name: 'Hawaiian Pizza', imgSrc: require('./assets/hawaiian.jpg'), description: 'Ham, pineapple, and mozzarella.', price: '$13.99' },
  { name: 'Veggie Pizza', imgSrc: require('./assets/veggie.jpg'), description: 'Bell peppers, olives, onions, and mushrooms.', price: '$11.99' },
  { name: 'Meat Lover\'s Pizza', imgSrc: require('./assets/meat_lovers.jpg'), description: 'Pepperoni, sausage, ham, and bacon.', price: '$16.99' },
  { name: 'Cheese Pizza', imgSrc: require('./assets/cheese.jpg'), description: 'A blend of mozzarella, cheddar, and parmesan.', price: '$10.99' },
  { name: 'Buffalo Chicken Pizza', imgSrc: require('./assets/buffalo_chicken.jpg'), description: 'Spicy buffalo chicken, mozzarella, and blue cheese.', price: '$15.99' },
  { name: 'Mushroom Pizza', imgSrc: require('./assets/mushroom.jpg'), description: 'Sautéed mushrooms, garlic, and mozzarella.', price: '$13.99' },
  { name: 'Supreme Pizza', imgSrc: require('./assets/supreme.jpg'), description: 'Pepperoni, sausage, bell peppers, onions, and olives.', price: '$17.99' },
  { name: 'Four Cheese Pizza', imgSrc: require('./assets/four_cheese.jpg'), description: 'Mozzarella, cheddar, parmesan, and gorgonzola.', price: '$13.99' },
  { name: 'Seafood Pizza', imgSrc: require('./assets/seafood.jpg'), description: 'Shrimp, calamari, and mussels on a garlic base.', price: '$18.99' },
  { name: 'Pesto Chicken Pizza', imgSrc: require('./assets/pesto_chicken.jpg'), description: 'Chicken, pesto sauce, and sun-dried tomatoes.', price: '$16.99' },
  { name: 'Sausage and Peppers Pizza', imgSrc: require('./assets/sausage_peppers.jpg'), description: 'Italian sausage, bell peppers, and onions.', price: '$14.99' },
  { name: 'Spinach and Feta Pizza', imgSrc: require('./assets/spinach_feta.jpg'), description: 'Spinach, feta cheese, and olives.', price: '$13.99' },
  { name: 'Truffle Mushroom Pizza', imgSrc: require('./assets/truffle_mushroom.jpg'), description: 'Truffle oil, mushrooms, and mozzarella.', price: '$19.99' },
  { name: 'Taco Pizza', imgSrc: require('./assets/taco.jpg'), description: 'Ground beef, lettuce, tomatoes, and cheddar cheese.', price: '$15.99' },
  { name: 'Chicken Alfredo Pizza', imgSrc: require('./assets/chicken_alfredo.jpg'), description: 'Alfredo sauce, grilled chicken, and spinach.', price: '$16.99' },
  { name: 'Mediterranean Pizza', imgSrc: require('./assets/mediterranean.jpg'), description: 'Artichokes, olives, feta cheese, and tomatoes.', price: '$14.99' },
  { name: 'Pulled Pork Pizza', imgSrc: require('./assets/pulled_pork.jpg'), description: 'Pulled pork, BBQ sauce, and red onions.', price: '$17.99' }
];


function createMenuItem(itemName, imgSrc, description, price) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const image = document.createElement('img');
  image.src = imgSrc;

  const itemHeading = document.createElement('h2');
  itemHeading.textContent = itemName;

  const itemText = document.createElement('p');
  itemText.textContent = description;

  const itemPrice = document.createElement('p');
  itemPrice.textContent = price;

  const buyBtn = document.createElement('button');
  buyBtn.textContent = 'Buy';

  const menuItemImage = document.createElement('div');
  menuItemImage.classList.add('menu-item-image');
  menuItemImage.appendChild(image);

  const menuItemContent = document.createElement('div');
  menuItemContent.classList.add('menu-item-content');
  menuItemContent.appendChild(itemHeading);
  menuItemContent.appendChild(itemText);

  const menuItemFooter = document.createElement('div');
  menuItemFooter.classList.add('menu-item-footer');
  menuItemFooter.appendChild(itemPrice);
  menuItemFooter.appendChild(buyBtn);

  menuItem.appendChild(menuItemImage);
  menuItem.appendChild(menuItemContent);
  menuItem.appendChild(menuItemFooter);

  return menuItem;
}


export default function menu() {
  const content = document.getElementById('content');
  const pageContainer = document.createElement('div');
  const menuItemContainer = document.createElement('div');
  const pageHeading = document.createElement('h1');
  pageHeading.textContent = 'Our Menu';

  pageContainer.classList.add('page-container');
  menuItemContainer.classList.add('menu-container');

  pageContainer.appendChild(pageHeading);
  pageContainer.appendChild(menuItemContainer);

  menuItems.forEach(item => {
      const menuItem = createMenuItem(item.name, item.imgSrc, item.description, item.price);
      menuItemContainer.appendChild(menuItem);
  });

  content.appendChild(pageContainer);
}
