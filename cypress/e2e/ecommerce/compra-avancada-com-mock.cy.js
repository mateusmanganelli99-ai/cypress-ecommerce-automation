describe('Compra com mock', () => {

  it('Deve simular chamada externa', () => {

    // 🔥 1. INTERCEPT (ANTES DO VISIT)
    cy.intercept('GET', '**/getconfig/**').as('getConfig')

    // 🔥 2. ACESSA O SITE
    cy.visit('https://automationexercise.com/')

    // 🔥 3. ESPERA A REQUISIÇÃO REAL
    cy.wait('@getConfig')

    // 🔥 4. VALIDA
    cy.contains('Home')

  })

})