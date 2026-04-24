describe('Login com usuário via API', () => {

  it('Deve logar com usuário criado pela API', () => {

    const email = `user${Date.now()}@test.com`
    const password = '123456'

    // 🔥 PASSO 3 (AQUI!)
    cy.criarUsuarioAPI(email, password)

    // 🔹 Login via UI
    cy.visit('/login')

    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()

    // 🔹 Validação
    cy.contains('Logged in as')

  })

})