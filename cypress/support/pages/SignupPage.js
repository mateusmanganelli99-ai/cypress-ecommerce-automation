class SignupPage {

  visit() {
    cy.visit('https://automationexercise.com/login')
  }

  fillSignup(name, email) {
    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(email)
  }

  submitSignup() {
    cy.get('[data-qa="signup-button"]').click()
  }

  fillForm(password) {
    cy.get('#password').should('be.visible').type(password)
    cy.get('#days').should('be.visible').select('1')
    cy.get('#months').should('be.visible').select('1')
    cy.get('#years').should('be.visible').select('2000')
 
    cy.get('#first_name').should('be.visible').type('Mateus')
    cy.get('#last_name').should('be.visible').type('QA')
    cy.get('#address1').should('be.visible').type('Rua Teste')
    cy.get('#country').select('India')
    cy.get('#state').should('be.visible').type('SP')
    cy.get('#city').should('be.visible').type('Sao Paulo')
    cy.get('#zipcode').should('be.visible').type('12345')
    cy.get('#mobile_number').should('be.visible').type('11999999999')
   }

  createAccount() {
    cy.get('[data-qa="create-account"]').click()
  }

  continue() {
    cy.get('[data-qa="continue-button"]').click()
  }

}

export default new SignupPage()