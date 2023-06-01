export default class Menu {
  constructor() {
    // Select the mobile menu element
    this.menu = document.querySelector('.mobile-menu');
    // Set the initial state of the menu to open
    this.menuState = true;
    // Select the menu toggle and backdrop elements
    this.menuButton = document.querySelectorAll('.menu-toggle, .menu-backdrop');

    // Add click event listeners to the menu toggle and backdrop elements
    this.menuButton.forEach((button) => {
      button.addEventListener('click', () => {
        this.toggleMenu();
      });
    });
  }

  // Initialize the menu
  init() {
    this.toggleMenu();
  }

  // Toggle the menu state and update the data attribute
  toggleMenu() {
    this.menuState = !this.menuState;
    this.menu.setAttribute('data-open', this.menuState);
  }
}
