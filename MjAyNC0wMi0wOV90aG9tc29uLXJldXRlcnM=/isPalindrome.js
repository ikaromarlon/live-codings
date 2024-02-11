/**
 * Checks if a given value is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 *
 * @param {string|number} value - The value to check for palindrome.
 * @returns {boolean} Returns true if the value is a palindrome, false otherwise.
 *
 * @example
 * isPalindrome('arara'); // true
 * isPalindrome('hello'); // false
 * isPalindrome(101); // true
 * isPalindrome(-101); // false
 */
function isPalindrome(value) {
  const stringValue = String(value);
  let inverse = '';
  for (let x = stringValue.length - 1; x >= 0; x--) {
    inverse = inverse + stringValue[x];
  }
  return inverse === stringValue;
}

const result = isPalindrome('ICARO')

console.log(result)