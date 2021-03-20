#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();
program.version(require("./package.json").version);

program
  .command("new [source]")
  .description("create a new foundation template")
  .action(source => {
    if (!source) source = "."
    require("./util/new.js")(source)
  })

program.parse()
const args = program.opts()
