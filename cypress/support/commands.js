Cypress.Commands.add('loginUI', (email, password) => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(password)
  cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('criarUsuarioAPI', (email, password) => {

  cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/createAccount',
    form: true,
    body: {
      name: 'Mateus QA',
      email: email,
      password: password,
      title: 'Mr',
      birth_date: '1',
      birth_month: '1',
      birth_year: '2000',
      firstname: 'Mateus',
      lastname: 'QA',
      company: 'Test',
      address1: 'Rua Teste',
      country: 'India',
      zipcode: '12345',
      state: 'SP',
      city: 'Sao Paulo',
      mobile_number: '11999999999'
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
  })

})