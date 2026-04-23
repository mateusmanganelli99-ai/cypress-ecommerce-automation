describe('Fluxo de compra completo', () => {

  it('Deve comprar com usuário logado', () => {

    const email = `mateus${Date.now()}${Math.random()}@test.com`
    const password = '123456'

    // 🔹 SIGNUP + LOGIN (garante usuário válido)
    cy.visit('https://automationexercise.com/login')

    cy.get('[data-qa="signup-name"]').type('Mateus QA')
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    cy.contains('Enter Account Information', { timeout: 10000 })

    cy.get('#password').type(password)
    cy.get('#days').select('1')
    cy.get('#months').select('1')
    cy.get('#years').select('2000')

    cy.get('#first_name').type('Mateus')
    cy.get('#last_name').type('QA')
    cy.get('#address1').type('Rua Teste')
    cy.get('#country').select('India')
    cy.get('#state').type('SP')
    cy.get('#city').type('Sao Paulo')
    cy.get('#zipcode').type('12345')
    cy.get('#mobile_number').type('11999999999')

    cy.get('[data-qa="create-account"]').click()
    cy.contains('Account Created!')
    cy.get('[data-qa="continue-button"]').click()

    // 🔥 VALIDA LOGIN (ESSENCIAL)
    cy.contains('Logged in as', { timeout: 10000 })

    // 🔹 PRODUTOS
    cy.contains('Products').click()

    cy.get('.product-image-wrapper').first().trigger('mouseover')
    cy.contains('Add to cart').click()

    cy.contains('View Cart').click()

    // 🔹 CHECKOUT
    cy.contains('Proceed To Checkout').click()

    // 🔥 AGORA SIM VAI PASSAR
    cy.contains('Address Details', { timeout: 10000 })

  })

})