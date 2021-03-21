const fs = require('fs')

const vars = require("../vars.js")
const templatepath = `${vars.dirname}/foundations`

module.exports = () => {
  let foundations = fs.readdirSync(templatepath)
  console.log(foundations.join("\t"))
}
