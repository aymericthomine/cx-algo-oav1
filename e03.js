function marsos(str) {
  const sosCount = str.length / 3
  const originalMessage = 'SOS'.repeat(sosCount)

  let errorCount = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== originalMessage[i]) {
      errorCount++
    }
  }

  return errorCount
}

console.log(marsos('SOFSOSSISSOW'))