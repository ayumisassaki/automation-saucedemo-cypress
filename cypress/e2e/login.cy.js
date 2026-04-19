import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/productspage';

describe('Login - SauceDemo', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  context('Cenário 1: Login válido', () => {
    it('deve realizar login com credenciais válidas e redirecionar para a página de produtos', () => {
      cy.fixture('users').then((users) => {
        const { username, password } = users.validUser;

        LoginPage.login(username, password);

        ProductsPage.validatePageIsDisplayed();
      });
    });
  });

  context('Cenário 2: Login inválido', () => {
    it('deve exibir mensagem de erro ao usar credenciais incorretas', () => {
      cy.fixture('users').then((users) => {
        const { username, password } = users.invalidUser;
        const expectedError = users.errorMessages.invalidCredentials;

        LoginPage.login(username, password);

        LoginPage.validateErrorMessage(expectedError);
      });
    });

    it('deve exibir mensagem de erro ao tentar login com usuário bloqueado', () => {
      cy.fixture('users').then((users) => {
        const { username, password } = users.lockedUser;
        const expectedError = users.errorMessages.lockedOut;

        LoginPage.login(username, password);

        LoginPage.validateErrorMessage(expectedError);
      });
    });

    it('deve exibir mensagem de erro quando o campo de usuário está vazio', () => {
      cy.fixture('users').then((users) => {
        const expectedError = users.errorMessages.usernameRequired;

        LoginPage.clickLogin();

        LoginPage.validateErrorMessage(expectedError);
      });
    });

    it('deve exibir mensagem de erro quando o campo de senha está vazio', () => {
      cy.fixture('users').then((users) => {
        const { username } = users.validUser;
        const expectedError = users.errorMessages.passwordRequired;

        LoginPage.fillUsername(username);
        LoginPage.clickLogin();

        LoginPage.validateErrorMessage(expectedError);
      });
    });
  });
});
