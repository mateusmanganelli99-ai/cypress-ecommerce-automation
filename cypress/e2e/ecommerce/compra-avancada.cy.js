describe('Fluxo completo de compra - nível sênior', () => {

  it('Deve validar toda a jornada de compra', () => {

    // 🔥 1. DADOS DINÂMICOS (evita conflito de usuário)
    const email = `mateus${Date.now()}${Math.floor(Math.random()*1000)}@test.com`
    const password = '123456'

    cy.log('EMAIL USADO: ' + email)

    // 🔹 2. ACESSO AO SITE
    cy.visit('https://automationexercise.com/login')

    // 🔹 3. CADASTRO (garante usuário válido)
    cy.get('[data-qa="signup-name"]').type('Mateus QA')
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    // 🔹 4. VALIDA QUE CHEGOU NA TELA CERTA
    cy.contains('Enter Account Information', { timeout: 10000 })

    // 🔹 5. PREENCHIMENTO (regra obrigatória do sistema)
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

    // 🔹 6. CRIAR CONTA
    cy.get('[data-qa="create-account"]').click()

    // 🔹 7. VALIDAÇÃO DE SUCESSO (checkpoint importante)
    cy.contains('Account Created!', { timeout: 10000 })

    cy.get('[data-qa="continue-button"]').click()

    // 🔥 8. VALIDA LOGIN (ESSENCIAL PRA CONTINUAR)
    cy.contains('Logged in as', { timeout: 10000 })

    // 🔹 9. IR PARA PRODUTOS
    cy.contains('Products').click()

    // 🔹 10. CAPTURAR NOME E PREÇO DO PRODUTO
    cy.get('.product-image-wrapper').first().within(() => {

      cy.get('.productinfo p').invoke('text').as('productName')
      cy.get('.productinfo h2').invoke('text').as('productPrice')

      cy.contains('Add to cart').click()
    })

    // 🔹 11. IR PARA CARRINHO
    cy.contains('View Cart').click()

    // 🔥 12. VALIDAR PRODUTO NO CARRINHO
    cy.get('@productName').then((name) => {
      cy.contains(name)
    })

    cy.get('@productPrice').then((price) => {
      cy.contains(price)
    })

    // 🔹 13. CHECKOUT
    cy.contains('Proceed To Checkout').click()

    // 🔥 14. VALIDAR CHECKOUT (erro comum aqui)
    cy.contains('Address Details', { timeout: 10000 })

    // 🔹 15. COMENTÁRIO DO PEDIDO
    cy.get('textarea[name="message"]').type('Compra automatizada Cypress')

    // 🔹 16. FINALIZAR PEDIDO
    cy.contains('Place Order').click()

    // 🔹 17. PAGAMENTO (fake)
    cy.get('[data-qa="name-on-card"]').type('Mateus QA')
    cy.get('[data-qa="card-number"]').type('4111111111111111')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2028')

    cy.get('[data-qa="pay-button"]').click()

    // 🔥 18. VALIDAÇÃO FINAL (objetivo do teste)
    cy.contains('Order Placed!', { timeout: 10000 })

  })

})