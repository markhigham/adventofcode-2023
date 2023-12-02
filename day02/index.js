const readFileFromStdIn = require('../common/fileReader')

function tokenize(word) {
  const result = []

  // Todo - loop through the digits in the word for
  // digits or one, two ... nine
  let buffer = word

  while (buffer.length) {
    result.push(buffer[0])
    buffer = buffer.slice(1)
  }

  return result
}

readFileFromStdIn()
  .then((lines) => {
    const total = lines.reduce((accumulator, line) => {
      const tokens = tokenize(line)
      console.log(tokens)
      return accumulator
    }, 0)

    console.log(total)
  })
  .catch((err) => console.error(err))
