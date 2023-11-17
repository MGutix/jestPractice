import { calculator, sum, capitalize, reverseString } from './sum';


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('passes marcos to equal Marcos', () =>{
  expect(capitalize('marcos')).toBe('Marcos')
})

test ('reverses bouldering', () => {
  expect(reverseString('bouldering')).toBe('gniredluob')
})

test('1 + 4', () =>{
  expect(calculator.add(1,4)).toBe(5)
})
test('1 - 4', () =>{
  expect(calculator.subtract(1,4)).toBe(-3)
})
test('1 / 4', () =>{
  expect(calculator.divide(1,4)).toBe(0.25)
})
test('1 * 4', () =>{
  expect(calculator.multiply(1,4)).toBe(4)
})

