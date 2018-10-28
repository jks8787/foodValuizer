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

    let finalOutput = {value: 0, cost: 0};
    data.map(d => {
      switch (d.usage) {
      case 'eaten':
          finalOutput.value += d.cost;
          finalOutput.cost += d.cost;
          return finalOutput;
          break;
      case 'composted':
          if(compostable.includes(d.category)) {
            finalOutput.value += (0.1 * d.cost);
            finalOutput.cost += d.cost;
          } else {
            finalOutput.cost += d.cost;
            return finalOutput;
          };
          break;
      case 'recycled':
          if(recyclable.includes(d.category)) {
            finalOutput.value += (0.05 * d.cost);
            finalOutput.cost += d.cost;
          } else {
            finalOutput.cost += d.cost;
            return finalOutput;
          };
          break;
      case 'trashed':
          finalOutput.cost += d.cost;
          return finalOutput;
          break;
      }
    });
    this.log(`final total value from given input: ${finalOutput.value}`);
    this.log(`overall cost from given input: ${finalOutput.cost}`);
  }
}

ValueizeCommand.description = `Valuizes input
...
`

ValueizeCommand.flags = {
  input: flags.string({char: 'i', description: 'input to be valuized'}),
}

module.exports = ValueizeCommand
