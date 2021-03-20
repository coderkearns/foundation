const path = require("path")
const fse = require('fs-extra')

const vars = require("../vars.js")
const templatepath = `${vars.dirname}/foundations`

module.exports = (foundation, name) => {
  sourcepath = path.resolve(name)
  fse.copySync(`${templatepath}/${foundation}`, sourcepath)
  console.log(`Succesfully created folder ${name} from ${foundation} foundation.`)
}
