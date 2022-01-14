const { it, expect } = require('@jest/globals');
const sum = require('./sum');

describe('testa exercicio 1', () => {
  it('testa exercicio 1', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('testa exercicio 2', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('testa exercicio 3', () => {
    expect(() => sum(4, '5')).toThrowError();
  });
  it('testa exercicio 4', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
})