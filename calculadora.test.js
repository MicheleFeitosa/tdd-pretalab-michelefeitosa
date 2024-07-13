const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.soma(3,3)).toEqual(6);
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.subtrai(6,3)).toEqual(3);
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.multiplica(6,3)).toEqual(18);
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.divide(6,3)).toEqual(2);
  })
})