
const { it, expect } = require('@jest/globals');
const fizzBuzz = require('./sumPart3');

describe('exercicio 3', () => {
  it('exercicio 1 Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('exercicio 2 Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(fizzBuzz(6)).toBe('fizz');
  });
  it('exercicio 3 Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(fizzBuzz(10)).toBe('buzz');
  });
  it('exercicio 4 Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(fizzBuzz(7)).toBe(7);
  });
  it('exercicio 5 Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(fizzBuzz('sim')).toBe(false);
  });
});