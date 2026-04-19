class CheckoutPage {
  // Seletores — Step One (Informações)
  get firstNameInput() {
    return '[data-test="firstName"]';
  }

  get lastNameInput() {
    return '[data-test="lastName"]';
  }

  get postalCodeInput() {
    return '[data-test="postalCode"]';
  }

  get continueButton() {
    return '[data-test="continue"]';
  }

  get cancelButton() {
    return '[data-test="cancel"]';
  }

  get checkoutError() {
    return '[data-test="error"]';
  }

  // Seletores — Step Two (Resumo)
  get summaryInfo() {
    return '[data-test="checkout-summary-container"]';
  }

  get finishButton() {
    return '[data-test="finish"]';
  }

  get summarySubtotal() {
    return '[data-test="subtotal-label"]';
  }

  get summaryTax() {
    return '[data-test="tax-label"]';
  }

  get summaryTotal() {
    return '[data-test="total-label"]';
  }

  // Seletores — Complete
  get completeHeader() {
    return '[data-test="complete-header"]';
  }

  get completeText() {
    return '[data-test="complete-text"]';
  }

  get backHomeButton() {
    return '[data-test="back-to-products"]';
  }

  // Ações
  fillCheckoutInfo(firstName, lastName, postalCode) {
    cy.get(this.firstNameInput).clear().type(firstName);
    cy.get(this.lastNameInput).clear().type(lastName);
    cy.get(this.postalCodeInput).clear().type(postalCode);
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }

  clickFinish() {
    cy.get(this.finishButton).click();
  }

  clickBackHome() {
    cy.get(this.backHomeButton).click();
  }

  completeCheckoutStepOne(firstName, lastName, postalCode) {
    this.fillCheckoutInfo(firstName, lastName, postalCode);
    this.clickContinue();
  }

  // Validações
  validateStepOneIsDisplayed() {
    cy.url().should('include', '/checkout-step-one.html');
  }

  validateStepTwoIsDisplayed() {
    cy.url().should('include', '/checkout-step-two.html');
  }

  validateOrderComplete() {
    cy.get(this.completeHeader)
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
    cy.url().should('include', '/checkout-complete.html');
  }

  validateCompleteText(expectedText) {
    cy.get(this.completeText)
      .should('be.visible')
      .and('contain.text', expectedText);
  }
}

export default new CheckoutPage();
