/**
 * Checks if the given string is balanced with respect to brackets.
 * 
 * @param {string} value - The string to check for balanced brackets.
 * @returns {boolean} - Returns true if the string has balanced brackets, false otherwise.
 * 
 * @example
 * isBalanced('{[()]}'); // true
 * isBalanced('{[(([}'); // false
 * isBalanced('{{[[(())]]}}'); // true
 */
function isBalanced(value) {
  for(let x = 0; x < value.length; x++) {
    if (value[x] === '{' && value[value.length -1 -x] !== '}'){
      return false
    }
    if (value[x] === '[' && value[value.length -1 -x] !== ']'){
      return false
    }
    if (value[x] === '[' && value[value.length -1 -x] !== ']'){
      return false
    }
  }
  return true
}

const result = isBalanced('{[(([}')

console.log(result)