#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();
program.version(require("./package.json").version);

program
  .command("new [source]")
  .description("Create a new foundation template.")
  .action(source => {
    if (!source) source = "."
    require("./util/new.js")(source)
  })

program
  .command("create <foundation> <name>", { isDefault: true })
  .description("Create a new folder from a foundation.")
  .action((foundation, name) => {
    require("./util/create.js")(foundation, name)
  })


program.parse()
