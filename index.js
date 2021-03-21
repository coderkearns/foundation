#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

// Define version
program.version(require("./package.json").version);

// create command
program
  .command("create <foundation> <name>", { isDefault: true })
  .description("Create a new folder from a foundation.")
  .action((foundation, name) => {
    require("./util/create.js")(foundation, name)
  })

// new command
program
  .command("new [source]")
  .description("Create a new foundation template.")
  .action(source => {
    if (!source) source = "."
    require("./util/new.js")(source)
  })

// remove command
program
  .command("remove <foundation>")
  .description("Delete a foundation.")
  .action((foundation, name) => {
    require("./util/remove.js")(foundation)
  })

// list command
program
  .command("list")
  .description("List foundations.")
  .action(() => {
    require("./util/list.js")()
  })


program.parse()
