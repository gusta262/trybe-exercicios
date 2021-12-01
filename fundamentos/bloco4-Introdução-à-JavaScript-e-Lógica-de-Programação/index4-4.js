function palindromo (str) {
  let reverse = str.split('').reverse().join('');

  if (reverse === str) {
    return true
  }
  else {
    return false
  }
};

console.log(palindromo('cuzinho'));