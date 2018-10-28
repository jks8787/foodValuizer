const {Command, flags} = require('@oclif/command')

class ValueizeCommand extends Command {
  async run() {
    const {flags} = this.parse(ValueizeCommand)
    // Default input is an empty array
    const input = flags.input || '[]'

    // Log input
    this.log(`valuizing input: ${input}`)

    // Parse input
    // Disabling eslint rule here as I am choosing to trust the user input.
    // Would need a more robust solution for real world code
    // eslint-disable-next-line no-eval
    const json = JSON.stringify(eval('(' + input + ')'))
    const data = JSON.parse(json)

    // Rules to be applied:
    // ...
    // Eaten: 100% of cost
    // Composted: 10% of cost
    // Recycled: 5% of cost
    // Trashed: 0% of cost
    // ...
    // Produce: Compostable
    // Dairy: Compostable
    // Drinks: Recyclable
    // ...
    // All food is edible or trashable.
    // If food is used in an unsupported way (e.g. recycling produce),
    // it’s considered to be trashed.

    const compostable = ['produce', 'dairy']
    const recyclable = ['drinks']
    let finalOutput = {value: 0, cost: 0}
    // Disabling eslint rule here as using the switch rather than an else if block
    // Should yelid a faster result
    // eslint-disable-next-line array-callback-return
    data.map(d => {
      switch (d.usage) {
      case 'eaten':
        finalOutput.value += d.cost
        finalOutput.cost += d.cost
        return finalOutput
      case 'composted':
        if (compostable.includes(d.category)) {
          finalOutput.value += (0.1 * d.cost)
          finalOutput.cost += d.cost
        } else {
          finalOutput.cost += d.cost
          return finalOutput
        }
        break
      case 'recycled':
        if (recyclable.includes(d.category)) {
          finalOutput.value += (0.05 * d.cost)
          finalOutput.cost += d.cost
        } else {
          finalOutput.cost += d.cost
          return finalOutput
        }
        break
      case 'trashed':
        finalOutput.cost += d.cost
        return finalOutput
      }
    })
    // Log value and overall cost
    this.log(`final total value from given input: ${finalOutput.value}`)
    this.log(`overall cost from given input: ${finalOutput.cost}`)
  }
}

ValueizeCommand.description = `Valuizes input
...
returns the input as well as the following:

final total value from given input: VALUE_OUT_PUT_HERE
overall cost from given input: OVERALL_COST_HERE
`

ValueizeCommand.flags = {
  input: flags.string({char: 'i', description: 'input to be valuized'}),
}

module.exports = ValueizeCommand
