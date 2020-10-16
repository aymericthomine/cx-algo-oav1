function IsAPangrams(str = '') {
    let sentence = ''
    let letters = 'abcdefghijklmnopqrstuvwxyz'
  
    for(let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)

      if (code >= 65 && code <= 90) {
          sentence += String.fromCharCode(code + 32)
      } else {
          sentence += String.fromCharCode(code)
      }
    }
  
    for (var i = 0; i < 26; i++) {
        if (sentence.indexOf(letters[i]) < 0) {
            return false
        }
    }

    return true
}

console.log(IsAPangrams('The quick brown fox jumps over the lazy dog'))
console.log(IsAPangrams('Hello Efrei'))