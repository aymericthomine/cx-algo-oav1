function isAPangram1(str) {
  for (let i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);

    if (!str.toUpperCase().includes(letter)) {
      return false
    }
  }

  return true
}

function isAPangram2(str) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  
  for (let char of alphabets) {
    if (!str.toLowerCase().includes(char)) {
      return false
    }
  }
  
  return true
}

function isAPangram3(str) {
  let tab = str.toLowerCase().replace(/ /g, "");
  let set = new Set(tab);
  return (set.size == 26 ? true : false);
}

console.log(isAPangram1('THE QUICK brown fox jumps over the lazy dog'))
console.log(isAPangram1('Hello Efrei'))

console.log(isAPangram2('THE QUICK brown fox jumps over the lazy dog'))
console.log(isAPangram2('Hello Efrei'))

console.log(isAPangram3('THE QUICK brown fox jumps over the lazy dog'))
console.log(isAPangram3('Hello Efrei'))

