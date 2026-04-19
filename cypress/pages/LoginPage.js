class LoginPage {
  // Seletores
  get usernameInput() {
    return '[data-test="username"]';
  }

  get passwordInput() {
    return '[data-test="password"]';
  }

  get loginButton() {
    return '[data-test="login-button"]';
  }

  get errorMessage() {
    return '[data-test="error"]';
  }

  // Ações
  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get(this.usernameInput).clear().type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }

  // Validações
  validateErrorMessage(expectedMessage) {
    cy.get(this.errorMessage).should('be.visible').and('contain.text', expectedMessage);
  }

  validateErrorMessageIsVisible() {
    cy.get(this.errorMessage).should('be.visible');
  }
}

export default new LoginPage();
