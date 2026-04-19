class CartPage {
  // Seletores
  get pageTitle() {
    return '[data-test="title"]';
  }

  get cartItems() {
    return '[data-test="inventory-item"]';
  }

  get checkoutButton() {
    return '[data-test="checkout"]';
  }

  get continueShoppingButton() {
    return '[data-test="continue-shopping"]';
  }

  // Ações
  clickCheckout() {
    cy.get(this.checkoutButton).click();
  }

  clickContinueShopping() {
    cy.get(this.continueShoppingButton).click();
  }

  removeItemByName(productName) {
    const dataTestValue = productName.toLowerCase().replace(/ /g, '-');
    cy.get(`[data-test="remove-${dataTestValue}"]`).click();
  }

  // Validações
  validatePageIsDisplayed() {
    cy.get(this.pageTitle).should('be.visible').and('have.text', 'Your Cart');
    cy.url().should('include', '/cart.html');
  }

  validateNumberOfItems(expectedCount) {
    cy.get(this.cartItems).should('have.length', expectedCount);
  }

  validateProductInCart(productName) {
    cy.get(this.cartItems)
      .find('[data-test="inventory-item-name"]')
      .should('contain.text', productName);
  }

  validateProductsInCart(productNames) {
    productNames.forEach((name) => {
      this.validateProductInCart(name);
    });
  }
}

export default new CartPage();
