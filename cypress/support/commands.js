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

Cypress.Commands.add('criarPedido', (email, carrinho) => {

  const total = carrinho.reduce((acc, item) => {
    return acc + (item.preco * item.quantidade)
  }, 0)

  return {
    id: Date.now(),
    usuario: email,
    itens: carrinho,
    total,
    status: 'CONFIRMADO'
  }

})

Cypress.Commands.add('criarUsuarioAPI', (email, password) => {

  return cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/createAccount',
    form: true,
    body: {
      name: 'Mateus QA',
      email,
      password,
      title: 'Mr',
      birth_date: '1',
      birth_month: '1',
      birth_year: '2000',
      firstname: 'Mateus',
      lastname: 'QA',
      address1: 'Rua Teste',
      country: 'India',
      zipcode: '12345',
      state: 'SP',
      city: 'Sao Paulo',
      mobile_number: '11999999999'
    }
  })

})