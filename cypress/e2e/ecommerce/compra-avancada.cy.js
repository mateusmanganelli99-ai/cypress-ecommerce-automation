describe('Fluxo completo de compra', () => {

  it('Deve validar toda a jornada de compra', () => {

    // 🔥 DADOS DINÂMICOS
    const email = `mateus${Date.now()}${Math.floor(Math.random()*1000)}@test.com`
    const password = '123456'

    cy.log('EMAIL USADO: ' + email)

    // 🔹 ACESSAR LOGIN
    cy.visit('https://automationexercise.com/login')

    // 🔹 SIGNUP
    cy.get('[data-qa="signup-name"]').type('Mateus QA')
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    // 🔹 VALIDAR TELA
    cy.contains('Enter Account Information', { timeout: 10000 })

    // 🔹 PREENCHER FORM
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

    // 🔹 CRIAR CONTA
    cy.get('[data-qa="create-account"]').click()

    cy.contains('Account Created!', { timeout: 10000 })
    cy.get('[data-qa="continue-button"]').click()

    // 🔥 VALIDAR LOGIN
    cy.contains('Logged in as', { timeout: 10000 })

    // 🔹 IR PARA PRODUTOS
    cy.contains('Products').click()

    // 🔥 CAPTURAR NOME E PREÇO (CORRIGIDO)
    cy.get('.productinfo p').first()
      .should('be.visible')
      .invoke('text')
      .as('productName')

    cy.get('.productinfo h2').first()
      .should('be.visible')
      .invoke('text')
      .as('productPrice')

    // 🔹 ADICIONAR AO CARRINHO
    cy.get('.product-image-wrapper').first().trigger('mouseover')
    cy.contains('Add to cart').click()

    // 🔹 IR PARA CARRINHO
    cy.contains('View Cart').click()

    // 🔥 VALIDAR PRODUTO NO CARRINHO
    cy.get('@productName').then((name) => {
      cy.contains(name)
    })

    cy.get('@productPrice').then((price) => {
      cy.contains(price)
    })

    // 🔹 CHECKOUT
    cy.contains('Proceed To Checkout').click()

    // 🔥 VALIDAR CHECKOUT
    cy.contains('Address Details', { timeout: 10000 })

    // 🔹 COMENTÁRIO
    cy.get('textarea[name="message"]').type('Compra automatizada Cypress')

    // 🔹 FINALIZAR PEDIDO
    cy.contains('Place Order').click()

    // 🔹 PAGAMENTO FAKE
    cy.get('[data-qa="name-on-card"]').type('Mateus QA')
    cy.get('[data-qa="card-number"]').type('4111111111111111')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2028')

    cy.get('[data-qa="pay-button"]').click()

    // 🔥 VALIDAÇÃO FINAL
    cy.contains('Order Placed!', { timeout: 10000 })

  })

})