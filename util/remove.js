const fs = require('fs')

const vars = require("../vars.js")
const templatepath = `${vars.dirname}/foundations`

module.exports = foundation => {
  fs.rmdirSync(`${templatepath}/${foundation}`, { recursive: true });
  console.log(`Succesfully removed foundation ${foundation}.`)
}
