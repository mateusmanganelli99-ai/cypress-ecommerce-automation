🚀 Conteúdo:

# 🧪 Cypress E2E Automation - E-commerce

![CI](https://github.com/mateusmanganelli99-ai/cypress-ecommerce-automation/actions/workflows/cypress.yml/badge.svg)

Projeto de automação de testes End-to-End utilizando Cypress, simulando o fluxo completo de compra em um e-commerce real.

---

## 📌 Objetivo

Garantir a qualidade de um fluxo crítico de negócio:

- Cadastro de usuário
- Login
- Navegação de produtos
- Adição ao carrinho
- Validação de dados (nome e preço)
- Checkout
- Finalização de pedido

---

## 🌐 Sistema testado

- https://automationexercise.com

---

## 🧪 Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js
- Git
- GitHub Actions (CI/CD)

---

## ⚙️ Estrutura do projeto

cypress/

├── e2e/

│ ├── auth/

│ └── ecommerce/

├── fixtures/

├── support/

│ ├── commands.js

│ └── pages/

.github/

└── workflows/

└── cypress.yml

---

## ▶️ Como executar o projeto

### 🔹 1. Clonar repositório

```bash
git clone https://github.com/mateusmanganelli99-ai/cypress-ecommerce-automation.git
cd cypress-ecommerce-automation
🔹 2. Instalar dependências
npm install
🔹 3. Executar testes
🖥️ Modo visual
npx cypress open
⚡ Modo headless
npx cypress run
🔄 Integração Contínua (CI/CD)

O projeto utiliza GitHub Actions para execução automática dos testes a cada push na branch main.

Pipeline:

Checkout do código
Instalação de dependências
Execução dos testes Cypress

🧠 Estratégias aplicadas
Uso de dados dinâmicos (evita conflitos de usuário)
Validação de regras de negócio (nome e preço do produto)
Separação de responsabilidades (Page Objects)
Testes resilientes (timeouts e asserts confiáveis)

🚨 Desafios e soluções
Desafio	Solução
Flakiness em elementos	Uso de should('be.visible')
Conflito de usuários	Geração de e-mail dinâmico
Problemas em CI	Uso da action oficial do Cypress
Elementos dinâmicos	Uso de invoke('text')

📊 Cenários automatizados
Cadastro de usuário com sucesso
Login com usuário criado
Adição de produto ao carrinho
Validação de nome e preço
Checkout completo
Finalização de pedido

🎯 Diferenciais do projeto
🔁 Execução automática via CI/CD
🧪 Validação de dados dinâmicos
🧠 Testes orientados a regra de negócio
🧱 Estrutura escalável (Page Object Pattern)
👨‍💻 Autor

Mateus Manganelli
QA Automation Engineer

📬 Contato
LinkedIn: (www.linkedin.com/in/mateus-felipe-9343183b3)
GitHub: https://github.com/mateusmanganelli99-ai
