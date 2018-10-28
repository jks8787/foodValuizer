foodValuizer
============

Intended to keep track of values for the various uses of food

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ git clone git@github.com:jks8787/foodValuizer.git
$ cd foodValuizer
$ npm install
$ npm link
$ foodValuizer hello
hello world from ./src/commands/hello.js
$ foodValuizer (-v|--version|version)
foodValuizer/0.0.1 darwin-x64 node-v8.12.0
$ foodValuizer --help hello
Outputs hello message

USAGE
  $ foodValuizer hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`foodValuizer hello`](#food-valuizer-hello)
* [`foodValuizer goodbye`](#food-valuizer-goodbye)
* [`foodValuizer help [COMMAND]`](#food-valuizer-help-command)

## `foodValuizer hello`
```
Outputs hello message

USAGE
  $ foodValuizer hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
```
_See code: [src/commands/hello.js](https://github.com/jks8787/foodValuizer/blob/v0.0.1/src/commands/goodbye.js)_

## `foodValuizer goodbye`
```
Outputs goodbye message

USAGE
  $ foodValuizer goodbye

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
```
_See code: [src/commands/goodbye.js](https://github.com/jks8787/foodValuizer/blob/v0.0.1/src/commands/goodbye.js)_

## `foodValuizer help [COMMAND]`
```
display help for foodValuizer

USAGE
  $ foodValuizer help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_
<!-- commandsstop -->
