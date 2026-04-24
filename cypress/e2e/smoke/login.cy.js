describe('Smoke - Login', () => {

  it('Deve acessar página de login', () => {
    cy.visit('/login')
    cy.contains('Login to your account')
  })

})