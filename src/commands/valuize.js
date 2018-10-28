const {Command, flags} = require('@oclif/command')

class ValueizeCommand extends Command {
  async run() {
    const {flags} = this.parse(ValueizeCommand);
    // default input is an empty array
    const input = flags.input || '[]';

    // log input
    this.log(`valuizing input: ${input}`);

    // parse input
    const json = JSON.stringify(eval("(" + input + ")"));
    const data = JSON.parse(json);

    // Eaten: 100% of cost
    // Composted: 10% of cost
    // Recycled: 5% of cost
    // Trashed: 0% of cost

    // Produce: Compostable
    // Dairy: Compostable
    // Drinks: Recyclable

    // All food is edible or trashable.
    // If food is used in an unsupported way (e.g. recycling produce),
    // it’s considered to be trashed.

    const compostable = ['produce', 'dairy'];
    const recyclable = ['drinks'];

    let finalValue = 0;
    data.map(d => {
      switch (d.usage) {
      case 'eaten':
          return finalValue += d.cost;
          break;
      case 'composted':
          compostable.includes(d.category) ? finalValue += (0.1 * d.cost) : finalValue;
          break;
      case 'recycled':
          recyclable.includes(d.category) ? finalValue += (0.05 * d.cost) : finalValue;
          break;
      case 'trashed':
          return finalValue;
          break;
      }
    });


    this.log(`final total value from given input: ${finalValue}`);
  }
}

ValueizeCommand.description = `Valuizes input
...
`

ValueizeCommand.flags = {
  input: flags.string({char: 'i', description: 'input to be valuized'}),
}

module.exports = ValueizeCommand
