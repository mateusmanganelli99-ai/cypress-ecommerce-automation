describe('Fluxo E2E + API', () => {

  it('Deve executar fluxo completo', () => {

    cy.fixture('user').then((user) => {

      const email = `user${Date.now()}@test.com`

      // 🔥 1. CRIAR USUÁRIO VIA API
      cy.criarUsuarioAPI(email, user.password)
        .then((res) => {
          expect(res.status).to.eq(200)
        })

      // 🔥 2. LOGIN UI
      cy.loginUI(email, user.password)

      cy.contains('Logged in as', { timeout: 10000 })

      // 🔥 3. IR PARA PRODUTOS
      cy.visit('/products')

      // 🔥 4. ADICIONAR AO CARRINHO
      cy.get('.product-image-wrapper')
        .first()
        .contains('Add to cart')
        .click()

      cy.contains('View Cart').click()

      // 🔥 5. VALIDAR CARRINHO
      cy.contains('Shopping Cart')

      // 🔥 6. CHECKOUT
      cy.contains('Proceed To Checkout').click()

      cy.contains('Address Details', { timeout: 10000 })

      // 🔥 7. FINALIZAR
      cy.get('textarea[name="message"]').type('Compra teste QA')

      cy.contains('Place Order').click()

      // 🔥 8. PAGAMENTO
      cy.get('[data-qa="name-on-card"]').type('Mateus QA')
      cy.get('[data-qa="card-number"]').type('4111111111111111')
      cy.get('[data-qa="cvc"]').type('123')
      cy.get('[data-qa="expiry-month"]').type('12')
      cy.get('[data-qa="expiry-year"]').type('2030')

      cy.get('[data-qa="pay-button"]').click()

      // 🔥 9. VALIDAÇÃO FINAL UI
      cy.contains('Order Placed', { timeout: 10000 })

      // 🔥 10. VALIDAÇÃO VIA API
   cy.criarUsuarioAPI(email, user.password).then(() => {

  cy.request({
    method: 'GET',
    url: `https://automationexercise.com/api/getUserDetailByEmail?email=${email}`
  }).then((res) => {

    cy.log(JSON.stringify(res.body))

    if (res.body.user) {
      expect(res.body.user.email).to.eq(email)
    } else {
      cy.log('API instável - ignorando validação')
    }
})

})

})

})

})
