export function sum(a, b) {
    return a + b;
  }

export function capitalize(string) {
  let letterArray = string.split('')
  letterArray[0] = letterArray[0].toUpperCase()
  return letterArray.join('')
}

export function reverseString(string) {
  return string.split('').reverse().join('')
}

export const calculator = {
  add(num1, num2){
    return num1 + num2
  },
  subtract(num1, num2){
    return num1 - num2
  },
  divide(num1, num2){
    return num1 / num2
  },
  multiply(num1, num2){
    return num1 * num2
  },
}


