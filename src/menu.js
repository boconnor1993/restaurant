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
  ];
  
  function createMenuItem(itemName, imgSrc, description, price) {
    const menuItem = document.createElement('div');
    const itemHeading = document.createElement('h2');
    const image = document.createElement('img');
    const itemText = document.createElement('p');
    const itemPrice = document.createElement('p');
    const buyBtn = document.createElement('button');
  
    itemHeading.textContent = itemName;
    image.src = imgSrc.default; // Use .default to access the image path
    itemText.textContent = description;
    itemPrice.textContent = price;
    buyBtn.textContent = 'Buy';
  
    menuItem.appendChild(itemHeading);
    menuItem.appendChild(image);
    menuItem.appendChild(itemText);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(buyBtn);
  
    return menuItem;
  }
  
  export default function menu() {
    const content = document.getElementById('content');
    const pageContainer = document.createElement('div');
    const pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Our Menu';
  
    pageContainer.appendChild(pageHeading);
  
    menuItems.forEach(item => {
      const menuItem = createMenuItem(item.name, item.imgSrc, item.description, item.price);
      pageContainer.appendChild(menuItem);
    });
  
    content.appendChild(pageContainer);
  }
  