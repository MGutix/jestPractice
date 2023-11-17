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

export function caesar(string, shiftNum) {
  let arr = string.split('')
  let regex = /\w+/

  let result =  arr.map((character) =>{
    if (regex.test(character)) {
      let code = character.charCodeAt(0)
      if(code>(122-shiftNum)){
        let dif = code + shiftNum - 123
        return String.fromCharCode(97 + dif)
      }
      return String.fromCharCode(code + shiftNum)
    }
    return character
  })

  return result.join('')
}
