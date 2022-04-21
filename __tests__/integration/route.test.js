const request = require('supertest');
const app = require('../../src/app');

describe('Integration', () => {
  it('Deverá retornar um status 204 quando chamada rota padrão', async () => {
    const response = await request(app)
    .get('/');

    expect(response.status).toBe(204)
  });

  it('Deverá retornar um status 200 quando chamada a rota de exemplo', async () => {
    const response = await request(app)
    .get('/example');

    expect(response.status).toBe(200)
  });

  it('Deverá retornar um status 404 quando chamada uma rota inválida', async () => {
    const response = await request(app)
    .get('/lalala');

    expect(response.status).toBe(404)
  });

  it('Deverá retornar um 200 ao chamar a rota de busca de saldo', async () => {
    const payload = { 
      agencia: "2077",
      conta: "54459-7"
    }
    const response =  await request(app)
    .post('/customer/balance')
    .send(payload)

    expect(response.status).toBe(200)
  });

  it('Deverá retornar um 400 ao chamar a rota de busca de saldo com dados inválidos', async () => {
    const payload = {
      agencia: "9999"
    }
    const response =  await request(app)
    .post('/customer/balance')
    .send(payload)

    expect(response.status).toBe(400)
  });

  it('Deverá retornar um 400 ao chamar a rota de busca de saldo com dados inválidos', async () => {
    const payload = {
      email: "invald_email.com"
    }
    const response =  await request(app)
    .post('/customer/resend_transaction')
    .send(payload)
    .expect(400);

    expect(response.status).toBe(400)
  });
})