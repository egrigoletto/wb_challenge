const app = require('../../src/app');
const { formatKeyDisplayData } = require('../../src/utils/formatter');


describe('Formatação de dados', () => {
  it('Deve formatar um dado de acordo com o padrão passado de cpf', async () => {
    expect(formatKeyDisplayData({ key:"329.539.788-01"}))
    .toEqual({ cpf: "32953978801" })
  });
})

describe('Formatação de dados', () => {
  it('Deve formatar um dado de acordo com o padrão passado de email', async () => {
    expect(formatKeyDisplayData({ key:"teste@teste.com"}))
    .toEqual({ email: "teste@teste.com" })
  });
})

describe('Formatação de dados', () => {
  it('Deve formatar um dado de acordo com o padrão passado de telefone', async () => {
    expect(formatKeyDisplayData({ key:"+55 11 2222-2222"}))
    .toEqual({ telefone: "+551122222222" })
  });
})
  