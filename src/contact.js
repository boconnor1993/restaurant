export default function contact() {
  const content = document.getElementById('content');
  const pageContainer = document.createElement('div');
  const pageHeading = document.createElement('h1');
  const pageText = document.createElement('p');
  const pageImage = document.createElement('img');

  pageHeading.textContent = 'Contact Us';
  pageText.textContent = 'Call us at 555-555-5555 or email us at';
  pageImage.src = require('./assets/contact.jpg');

  pageContainer.appendChild(pageHeading);
  pageContainer.appendChild(pageText);
  pageContainer.appendChild(pageImage);

  content.appendChild(pageContainer);
}
