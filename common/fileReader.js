const readline = require('node:readline')

function readFileFromStdIn() {
  const lines = []

  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
    })

    rl.on('line', (line) => {
      lines.push(line)
    })

    rl.on('close', () => {
      resolve(lines)
    })
  })
}

module.exports = readFileFromStdIn
