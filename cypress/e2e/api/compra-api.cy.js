describe('API - Compra avançada', () => {

  it('Deve simular fluxo completo de compra', () => {

    const email = `user${Date.now()}@test.com`
    const password = '123456'

    // 🔥 1. CRIAR USUÁRIO
    cy.request({
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
    }).then((res) => {
      expect(res.status).to.eq(200)
    })

    // 🔥 2. LOGIN
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        email,
        password
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
    })

    // 🔥 3. SIMULAR CARRINHO (MOCK)
    const carrinho = [
      { produto: 'Camiseta', preco: 100, quantidade: 2 },
      { produto: 'Calça', preco: 200, quantidade: 1 }
    ]

    // 🔥 4. CALCULAR TOTAL
    const total = carrinho.reduce((acc, item) => {
      return acc + (item.preco * item.quantidade)
    }, 0)

    cy.log('Total calculado: ' + total)

    // 🔥 5. VALIDAR REGRA DE NEGÓCIO
    expect(total).to.eq(400)

    // 🔥 6. SIMULAR CRIAÇÃO DE PEDIDO
    const pedido = {
      id: Date.now(),
      usuario: email,
      itens: carrinho,
      total: total,
      status: 'CONFIRMADO'
    }

    // 🔥 7. VALIDAÇÃO FINAL
    expect(pedido.status).to.eq('CONFIRMADO')
    expect(pedido.total).to.eq(400)

  })

})