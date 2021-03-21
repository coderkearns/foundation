const path = require("path")
const fs = require('fs');
const fse = require('fs-extra')
const { exec } = require('shelljs');

const vars = require("../vars.js")
const templatepath = `${vars.dirname}/foundations`

module.exports = (foundation, name) => {
  let sourcepath = path.resolve(name)
  fse.copySync(`${templatepath}/${foundation}`, sourcepath)
  process.cwd(`./${name}/`)
  if (fs.existsSync("./init.sh")) {
    exec(`./init.sh ${name} ${sourcepath}`)
    exec(`rm -rf ./init.sh`)
  }
  process.cwd(`../`)
  console.log(`Succesfully created folder ${name} from ${foundation} foundation.`)
}
