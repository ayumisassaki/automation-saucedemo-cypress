// ***********************************************************
// Arquivo de suporte do Cypress - Comandos customizados
// Carregado automaticamente antes de cada arquivo de teste.
// ***********************************************************

// Comando customizado para login rápido via UI
Cypress.Commands.add('loginViaUI', (username, password) => {
  cy.visit('/');
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');
});
