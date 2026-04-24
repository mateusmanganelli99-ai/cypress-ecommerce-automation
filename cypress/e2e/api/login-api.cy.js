describe('API - Login', () => {

  it('Deve validar login via API', () => {

    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        email: 'teste@test.com',
        password: '123456'
      }
    }).then((response) => {

      expect(response.status).to.eq(200)

      cy.log(JSON.stringify(response.body))

    })

  })

})