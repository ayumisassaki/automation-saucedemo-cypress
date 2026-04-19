# SauceDemo - Automação de Testes E2E com Cypress

Projeto de automação de testes end-to-end utilizando [Cypress](https://www.cypress.io/) para o site de demonstração [SauceDemo](https://www.saucedemo.com).

---

## 📋 Cenários de Teste

| #  | Cenário                | Descrição                                                                                       |
|----|------------------------|-------------------------------------------------------------------------------------------------|
| 1  | Login válido           | Login com `standard_user` / `secret_sauce` e validação do redirecionamento para produtos        |
| 2  | Login inválido         | Tentativas de login com credenciais incorretas, usuário bloqueado e campos vazios                |
| 3  | Fluxo de compra        | Adicionar 2 produtos ao carrinho, checkout completo e validação da confirmação do pedido        |

---

## 🏗️ Estrutura do Projeto

```
saucedemo-cypress/
├── cypress/
│   ├── e2e/                        # Arquivos de teste
│   │   ├── login.cy.js             # Testes de login (válido e inválido)
│   │   └── purchase.cy.js          # Testes do fluxo de compra
│   ├── fixtures/                   # Dados de teste (fixtures)
│   │   ├── users.json              # Credenciais e mensagens de erro
│   │   └── checkout.json           # Dados de produtos e checkout
│   ├── pages/                      # Page Objects
│   │   ├── LoginPage.js            # Page Object da página de login
│   │   ├── ProductsPage.js         # Page Object da página de produtos
│   │   ├── CartPage.js             # Page Object do carrinho
│   │   └── CheckoutPage.js         # Page Object do checkout
│   └── support/                    # Suporte e comandos customizados
│       ├── commands.js             # Comandos customizados do Cypress
│       └── e2e.js                  # Arquivo de configuração de suporte
├── cypress.config.js               # Configuração do Cypress
├── package.json                    # Dependências e scripts
└── README.md                       # Este arquivo
```

---

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/) (v9 ou superior)

---

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd saucedemo-cypress
```

2. Instale as dependências:

```bash
npm install
```

---

## ▶️ Execução dos Testes

### Modo interativo (Cypress GUI)

```bash
npm run cy:open
```

### Modo headless (linha de comando)

```bash
# Executar todos os testes
npm run cy:run

# Executar apenas testes de login
npm run cy:run:login

# Executar apenas testes de fluxo de compra
npm run cy:run:purchase
```

---

## 🏛️ Padrões e Boas Práticas

### Page Object Model (POM)

Cada página do site é representada por uma classe no diretório `cypress/pages/`. Os Page Objects encapsulam:
- **Seletores** — localizadores de elementos usando atributos `data-test`
- **Ações** — métodos que executam interações (clique, digitação, navegação)
- **Validações** — métodos que verificam o estado esperado da página

### Fixtures (Data Factory)

Os dados de teste são mantidos em arquivos JSON no diretório `cypress/fixtures/`, separando dados da lógica de teste:
- `users.json` — credenciais de usuários e mensagens de erro esperadas
- `checkout.json` — produtos a serem adicionados e dados do formulário de checkout

### Seleção de Elementos

Todos os seletores utilizam o atributo `data-test` (ex: `[data-test="username"]`), conforme recomendado pela [documentação oficial do Cypress](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements).

### Organização dos Testes

- Testes agrupados por funcionalidade usando `describe` e `context`
- Nomes de testes descritivos em português
- `beforeEach` para setup compartilhado
- Cada teste é independente e pode ser executado isoladamente

---

## 📝 Tecnologias

- **Cypress** v15.14.0
- **JavaScript** (ES Modules)
- **Node.js**
