const {
  retrieveCustomerAcountData,
  retriveDataByAccount,
  retriveBalanceData 
} = require('../../src/services/customer');
const { reproccessPixKey, getBalance } = require('../../src/controllers/customer');
const request = require('supertest');
const app = require('../../src/app');


describe('Obtenção de dados e reprocessamento de chave', () => {
  it('Deve retornar o saldo', async () => {
      
    expectedResult = { balance: 5000 }

    expect(await retriveBalanceData())
    .toEqual(expectedResult)
    });


  it('Deve retornar os dados de uma conta a partir da conta e agêcia de um cliente', async () => {
    
    const agency = '7961'
    const account = '52850-6'
    const expectedResult = {
      account: '52850-6', 
      agency: '7961', 
      customerID: '6db3cb1b-b91e-4a4f-8a13-a1a423cf7991'
    }

    expect(await retriveDataByAccount(agency, account))
    .toEqual(expectedResult)
    });

  it('Deve retornar os dados de uma conta apartir do id', async () => {
  
    const customerID = '6db3cb1b-b91e-4a4f-8a13-a1a423cf7991'
    const expectedResult = {
      account: '52850-6',
      agency: '7961',
      customerID: '6db3cb1b-b91e-4a4f-8a13-a1a423cf7991',
    }

    expect(await retrieveCustomerAcountData({ customerID }))
    .toEqual(expectedResult)
    });

    it('Deve retornar os dados de saldo a partir dos dados da conta', async () => {
  
      const accountData = {
        agencia: '7961',
        conta: '52850-6'
      }
      const expectedResult = {
        balance: 5000,
        retrieved: true,
      }
  
      expect(await getBalance(accountData))
      .toEqual(expectedResult)
    });

    it('Deve retornar os dados de reprocessamento e chave pix a partir de uma conta em reprocessamento', async () => {
  
      const customerData = {
        email: 'sheridancrist@lemke.info',
      }
      const expectedResult = {
        isReprocessed: true,
        mensagem: "Transação reprocessada com sucesso",
        agencia: "7961",
        conta: "52850-6",
        cpf: "90216859639"
        
      }
  
      expect(await reproccessPixKey(customerData))
      .toEqual(expectedResult)
    });
})
