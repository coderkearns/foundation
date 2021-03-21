const path = require("path")
const fs = require('fs');
const fse = require('fs-extra')
const shell = require('shelljs');

const vars = require("../vars.js")
const templatepath = `${vars.dirname}/foundations`

module.exports = (foundation, name) => {
  let sourcepath = path.resolve(name)
  fse.copySync(`${templatepath}/${foundation}`, sourcepath)
  shell.cd(name)
  if (fs.existsSync(`./init.sh`)) {
    shell.exec(`./init.sh ${name} ${sourcepath}`)
    shell.rm(`./init.sh`)
  }
  shell.cd("../")
  console.log(`Succesfully created folder ${name} from ${foundation} foundation.`)
}
