import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Fluxo de Compra - SauceDemo', () => {
  let checkoutData;

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      const { username, password } = users.validUser;
      LoginPage.visit();
      LoginPage.login(username, password);
      ProductsPage.validatePageIsDisplayed();
    });

    cy.fixture('checkout').then((data) => {
      checkoutData = data;
    });
  });

  context('Cenário 3: Fluxo completo de compra', () => {
    it('deve adicionar produtos ao carrinho, fazer checkout e confirmar o pedido', () => {
      const { products, checkout, confirmationMessage } = checkoutData;

      // Passo 1: Adicionar ao menos 2 produtos ao carrinho
      products.forEach((product) => {
        ProductsPage.addProductToCartByName(product);
      });

      // Validar que o badge do carrinho exibe a quantidade correta
      ProductsPage.validateCartBadge(products.length);

      // Passo 2: Acessar o carrinho e validar que os produtos estão lá
      ProductsPage.goToCart();
      CartPage.validatePageIsDisplayed();
      CartPage.validateNumberOfItems(products.length);
      CartPage.validateProductsInCart(products);

      // Passo 3: Iniciar o checkout e preencher os dados
      CartPage.clickCheckout();
      CheckoutPage.validateStepOneIsDisplayed();
      CheckoutPage.completeCheckoutStepOne(
        checkout.firstName,
        checkout.lastName,
        checkout.postalCode
      );

      // Passo 4: Validar resumo e finalizar a compra
      CheckoutPage.validateStepTwoIsDisplayed();
      CheckoutPage.clickFinish();

      // Passo 5: Validar a mensagem de confirmação do pedido
      CheckoutPage.validateOrderComplete();
    });
  });

  context('Adição de produtos ao carrinho', () => {
    it('deve refletir os produtos adicionados corretamente no carrinho', () => {
      const { products } = checkoutData;

      products.forEach((product) => {
        ProductsPage.addProductToCartByName(product);
      });

      ProductsPage.goToCart();
      CartPage.validatePageIsDisplayed();

      products.forEach((product) => {
        CartPage.validateProductInCart(product);
      });
    });
  });
});
