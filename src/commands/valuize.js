const {Command, flags} = require('@oclif/command')

class ValueizeCommand extends Command {
  async run() {
    const {flags} = this.parse(ValueizeCommand)
    const input = flags.input || '[]'
    this.log(`valuizing input: ${input}`)
  }
}

ValueizeCommand.description = `Valuizes input
...
`

ValueizeCommand.flags = {
  input: flags.string({char: 'i', description: 'input to be valuized'}),
}

module.exports = ValueizeCommand
