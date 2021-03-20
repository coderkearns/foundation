const path = require("path")
const fse = require('fs-extra')

const vars = require("../vars.js")
const templatepath = `${vars.dirname}/foundations`

module.exports = source => {
  sourcepath = path.resolve(source)
  name = path.basename(sourcepath)
  fse.copySync(sourcepath, `${templatepath}/${name}`)
  console.log(`Succesfully created foundation ${name}.`)
}
