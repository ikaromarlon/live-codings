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
  const length = stringValue.length;
  for (let i = 0; i < length / 2; i++) {
    if (stringValue[i] !== stringValue[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const result = isPalindrome('ICARO')

console.log(result)

// arara
// rececar
