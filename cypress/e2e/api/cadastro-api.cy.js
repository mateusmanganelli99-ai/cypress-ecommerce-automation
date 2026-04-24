describe('API - Cadastro de usuário', () => {

  it('Deve criar usuário com sucesso', () => {

    const email = `user${Date.now()}@test.com`
    const password = '123456'

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
        company: 'Empresa Teste',
        address1: 'Rua Teste',
        country: 'India',
        zipcode: '12345',
        state: 'SP',
        city: 'Sao Paulo',
        mobile_number: '11999999999'
      }
    }).then((response) => {

      // 🔥 valida status
      expect(response.status).to.eq(200)

      // 🔥 valida retorno
      expect(response.body).to.include('User created')

    })

  })

})