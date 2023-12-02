const readFileFromStdIn = require('../common/fileReader')

function getDigit(word) {
  for (let i = 0; i < word.length; i++) {
    const num = Number(word[i])
    if (!isNaN(num)) {
      return num
    }
  }
}

// 55477

readFileFromStdIn()
  .then((lines) => {
    const value = lines.reduce((sum, line) => {
      const first = getDigit(line)

      const reversed = line.split('').reverse().join('')
      const second = getDigit(reversed)
      const total = Number(`${first}${second}`)
      return sum + total
    }, 0)

    console.log(value)
  })
  .catch((err) => console.error(err))
