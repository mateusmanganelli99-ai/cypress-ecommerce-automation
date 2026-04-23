import SignupPage from '../../support/pages/SignupPage'
import LoginPage from '../../support/pages/LoginPage'

describe('Fluxo completo', () => {

  it('Cadastro + Login com mesmo email', () => {

    cy.fixture('user').then((user) => {

      const email = `mateus${Date.now()}${Math.floor(Math.random()*1000)}@test.com`
      const password = user.password

      cy.log('EMAIL USADO: ' + email)

      // 🔹 SIGNUP
      SignupPage.visit()
      SignupPage.fillSignup(user.name, email)
      SignupPage.submitSignup()

      cy.contains('Enter Account Information', { timeout: 10000 })

      SignupPage.fillForm(password)
      SignupPage.createAccount()

      cy.contains('Account Created!')
      SignupPage.continue()

      cy.contains('Logged in as')

      // 🔹 LOGOUT
      cy.contains('Logout').click()

      // 🔹 LOGIN COM O MESMO EMAIL
      LoginPage.login(email, password)

      cy.contains('Logged in as', { timeout: 10000 })

    })

  })

})