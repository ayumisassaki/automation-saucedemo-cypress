class ProductsPage {
  // Seletores
  get pageTitle() {
    return '[data-test="title"]';
  }

  get inventoryList() {
    return '[data-test="inventory-list"]';
  }

  get inventoryItems() {
    return '[data-test="inventory-item"]';
  }

  get shoppingCartBadge() {
    return '[data-test="shopping-cart-badge"]';
  }

  get shoppingCartLink() {
    return '[data-test="shopping-cart-link"]';
  }

  // Ações
  addProductToCartByIndex(index) {
    cy.get(this.inventoryItems)
      .eq(index)
      .find('button[data-test^="add-to-cart"]')
      .click();
  }

  addProductToCartByName(productName) {
    const dataTestValue = productName.toLowerCase().replace(/ /g, '-');
    cy.get(`[data-test="add-to-cart-${dataTestValue}"]`).click();
  }

  goToCart() {
    cy.get(this.shoppingCartLink).click();
  }

  getProductNameByIndex(index) {
    return cy.get(this.inventoryItems)
      .eq(index)
      .find('[data-test="inventory-item-name"]');
  }

  // Validações
  validatePageIsDisplayed() {
    cy.get(this.pageTitle).should('be.visible').and('have.text', 'Products');
    cy.url().should('include', '/inventory.html');
  }

  validateCartBadge(expectedCount) {
    cy.get(this.shoppingCartBadge)
      .should('be.visible')
      .and('have.text', expectedCount.toString());
  }
}

export default new ProductsPage();
