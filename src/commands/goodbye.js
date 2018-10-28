const {Command, flags} = require('@oclif/command')

class GoodbyeCommand extends Command {
  async run() {
    const {flags} = this.parse(GoodbyeCommand)
    const name = flags.name || 'world'
    this.log(`goodbye ${name} from ./src/commands/goodbye.js`)
  }
}

GoodbyeCommand.description = `Outputs goodbye message
...
`

GoodbyeCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = GoodbyeCommand
