const path = require("path")
const fse = require('fs-extra')

const vars = require("../vars.js")
const templatepath = `${vars.dirname}/foundations`

module.exports = () => {
  let foundations = fs.listdirSync(templatepath)
  console.log(foundation.join("\t"))
}
