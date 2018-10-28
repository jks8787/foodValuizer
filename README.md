foodValuizer
============

Intended to keep track of values for the various uses of food

<!-- toc -->
* [Usage](#local-usage)
* [Commands](#commands)
<!-- tocstop -->
# Local Usage
<!-- usage -->
```sh-session
$ git clone git@github.com:jks8787/foodValuizer.git
$ cd foodValuizer/
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
* [`foodValuizer hello`](#foodvaluizer-hello)
* [`foodValuizer goodbye`](#foodvaluizer-goodbye)
* [`foodValuizer valuize`](#foodvaluizer-valuize)
* [`foodValuizer help [COMMAND]`](#foodvaluizer-help-command)

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
_See code: [src/commands/hello.js](https://github.com/jks8787/foodValuizer/blob/master/src/commands/goodbye.js)_

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
_See code: [src/commands/goodbye.js](https://github.com/jks8787/foodValuizer/blob/master/src/commands/goodbye.js)_

## `foodValuizer valuize`
```
Valuizes input

USAGE
  $ foodValuizer valuize

OPTIONS
  -i, --input=input  input to be valuized

DESCRIPTION
  ...
  returns the input as well as the following:

  final total value from given input: VALUE_OUT_PUT_HERE
  overall cost from given input: OVERALL_COST_HERE
```
_See code: [src/commands/valuize.js](https://github.com/jks8787/foodValuizer/blob/master/src/commands/valuize.js)_

### Example Use
```
# Run the following command:
$ foodValuizer valuize --input='[
  { category: "produce", cost: 1.00, usage: "eaten" },
  { category: "produce", cost: 1.50, usage: "trashed" },
  { category: "dairy", cost: 3.00, usage: "composted" },
  { category: "dairy", cost: 4.00, usage: "recycled" },
  { category: "drinks", cost: 2.00, usage: "recycled" },
  { category: "meat", cost: 5.00, usage: "composted" }
]'

# Expect the following output:
valuizing input: [
  { category: "produce", cost: 1.00, usage: "eaten" },
  { category: "produce", cost: 1.50, usage: "trashed" },
  { category: "dairy", cost: 3.00, usage: "composted" },
  { category: "dairy", cost: 4.00, usage: "recycled" },
  { category: "drinks", cost: 2.00, usage: "recycled" },
  { category: "meat", cost: 5.00, usage: "composted" }
]
final total value from given input: 1.40
overall cost from given input: 16.50
```

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
# Tests
<!-- tests -->
```sh-session
$ npm test
> foodValuizer@0.0.1 test /Users/janicesmith/code/foodValuizer
> nyc mocha --forbid-only "test/**/*.test.js"



 goodbye
   ✓ runs goodbye (174ms)
   ✓ runs goodbye --name janice

 hello
   ✓ runs hello
   ✓ runs hello --name jeff

 valuize eaten and trashed
   ✓ runs valuize
   ✓ runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}]'

 valuize eaten, trashed and recycled
   ✓ runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'drinks', cost: 3.00, usage: 'recycled'}]'

 valuize eaten, trashed and composted
   ✓ runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'dairy', cost: 3.00, usage: 'composted'}]'

 valuize eaten, trashed and a non-recyclable being recycled
   ✓ runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'dairy', cost: 3.00, usage: 'recycled'}]'

 valuize eaten, trashed and a non-compostable being composted
   ✓ runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'meat', cost: 3.00, usage: 'composted'}]'


 10 passing (236ms)

------------|----------|----------|----------|----------|-------------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------|----------|----------|----------|----------|-------------------|
All files   |      100 |      100 |      100 |      100 |                   |
goodbye.js  |      100 |      100 |      100 |      100 |                   |
hello.js    |      100 |      100 |      100 |      100 |                   |
valuize.js  |      100 |      100 |      100 |      100 |                   |
------------|----------|----------|----------|----------|-------------------|

> foodValuizer@0.0.1 posttest /Users/janicesmith/code/foodValuizer
> eslint .

```
<!-- teststop -->

# Notes
This project set up using [oclif](https://oclif.io).
