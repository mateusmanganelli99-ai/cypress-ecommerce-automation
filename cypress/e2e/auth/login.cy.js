describe('Login', () => {

  it('Deve logar com usuário criado', () => {

    const email = 'mateus177697411815196@test.com'
    const password = '123456'

    cy.loginUI(email, password)

    cy.contains('Logged in as', { timeout: 10000 })

  })

})