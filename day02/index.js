const readFileFromStdIn = require('../common/fileReader')

readFileFromStdIn()
  .then((lines) => console.log(lines))
  .catch((err) => console.error(err))
