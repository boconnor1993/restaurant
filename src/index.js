import './styles.css';
import menu from './menu';
import home from './home';
import contact from './contact';

window.addEventListener('DOMContentLoaded', () => {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      console.log('Home button clicked');
      clearContent();
      home();
    });
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      console.log('Menu button clicked');
      clearContent();
      menu();
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      console.log('Contact button clicked');
      clearContent();
      contact();
    });
  }

  // Load the home page by default
  home();
});

// Clear the content of the page
function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}
