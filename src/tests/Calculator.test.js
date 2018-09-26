import calculate from '../utils/calculate.js'
describe('Calculate', () => {
  let expression;
  it ('evaluates the expression correctly', () => {
    expression = '2+3+4-4*3'
    expect(calculate(expression)).toBe(-3);

    expression = '0+3+4'
    expect(calculate(expression)).toBe(7);

    expression = '0-9'
    expect(calculate(expression)).toBe(-9);

    expression = '0.5+2.3'
    expect(calculate(expression)).toBe(2.8);
  })

  it ('evaluates expressions starting with a "-" operator', () => {
    expression = '-30'
    expect(calculate(expression)).toBe(-30);
  })

  it ('evaluates longer expressions starting with a "-" operator', () => {
    expression = '-30-6'
    expect(calculate(expression)).toBe(-36);

    expression = '-0.5+5.3'
    expect(calculate(expression)).toBe(4.8)
  })

  it ('should throw an error for expressions starting with any other operator apart from "-" ', () => {

    expression = '*30-6'
    expect(calculate(expression)).toThrow();

    expression = '*3'
    expect(calculate(expression)).toThrow();

    expression = '+4-6'
    expect(calculate(expression)).toThrow();

    expression = '/4-6'
    expect(calculate(expression)).toThrow();
  })

  it ('ignores trailing operators while evaluating the expression correctly', () => {
    expression = '2+3+4-4*3-'
    expect(calculate(expression)).toBe(-3);
  })

  it ('ignores every expression after multiple operators while evaluating the expression correctly', () => {
    expression = '2+3++4-/4*3+78-'
    expect(calculate(expression)).toBe(5);
  })

})