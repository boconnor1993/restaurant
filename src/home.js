export default function home() {
  const content = document.getElementById('content');
  const pageContainer = document.createElement('div');
  const pageHeading = document.createElement('h1');
  const pageText = document.createElement('p');
  const pageImage = document.createElement('img');

  pageHeading.textContent = 'Welcome to Our Pizzeria!';
  pageText.textContent = 'We serve the best pizza in town. Order online or visit us at our location.';
  pageImage.src = require('./assets/pizzeria.jpg');

  pageContainer.appendChild(pageHeading);
  pageContainer.appendChild(pageText);
  pageContainer.appendChild(pageImage);

  content.appendChild(pageContainer);
}
