const {expect, test} = require('@oclif/test')

describe('valuize eaten and trashed', () => {
  test
  .stdout()
  .command(['valuize'])
  .it('runs valuize', ctx => {
    expect(ctx.stdout).to.contain('valuizing input: []')
  })

  test
  .stdout()
  .command(['valuize', '--input', "[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}]"])
  .it("runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}]'", ctx => {
    expect(ctx.stdout).to.contain("valuizing input: [{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}]");
    expect(ctx.stdout).to.contain("final total value from given input: 1");
    expect(ctx.stdout).to.contain("overall cost from given input: 2");
  })
});

describe('valuize eaten, trashed and recycled', () => {
  test
  .stdout()
  .command(['valuize', '--input', "[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'drinks', cost: 3.00, usage: 'recycled'}]"])
  .it("runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'drinks', cost: 3.00, usage: 'recycled'}]'", ctx => {
    expect(ctx.stdout).to.contain("valuizing input: [{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'drinks', cost: 3.00, usage: 'recycled'}]");
    expect(ctx.stdout).to.contain("final total value from given input: 1.15");
    expect(ctx.stdout).to.contain("overall cost from given input: 5");
  })
});

describe('valuize eaten, trashed and composted', () => {
  test
  .stdout()
  .command(['valuize', '--input', "[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'dairy', cost: 3.00, usage: 'composted'}]"])
  .it("runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'dairy', cost: 3.00, usage: 'composted'}]'", ctx => {
    expect(ctx.stdout).to.contain("valuizing input: [{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'dairy', cost: 3.00, usage: 'composted'}]");
    expect(ctx.stdout).to.contain("final total value from given input: 1.3");
    expect(ctx.stdout).to.contain("overall cost from given input: 5");
  })
});

describe('valuize eaten, trashed and a non-recyclable being recycled', () => {
  test
  .stdout()
  .command(['valuize', '--input', "[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'dairy', cost: 3.00, usage: 'recycled'}]"])
  .it("runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'dairy', cost: 3.00, usage: 'recycled'}]'", ctx => {
    expect(ctx.stdout).to.contain("valuizing input: [{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'dairy', cost: 3.00, usage: 'recycled'}]");
    expect(ctx.stdout).to.contain("final total value from given input: 1");
    expect(ctx.stdout).to.contain("overall cost from given input: 5");
  })
});

describe('valuize eaten, trashed and a non-compostable being composted', () => {
  test
  .stdout()
  .command(['valuize', '--input', "[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'meat', cost: 3.00, usage: 'composted'}]"])
  .it("runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'meat', cost: 3.00, usage: 'composted'}]'", ctx => {
    expect(ctx.stdout).to.contain("valuizing input: [{category: 'produce', cost: 1.00, usage: 'eaten'}, {category: 'produce', cost: 1.00, usage: 'trashed'}, {category: 'meat', cost: 3.00, usage: 'composted'}]");
    expect(ctx.stdout).to.contain("final total value from given input: 1");
    expect(ctx.stdout).to.contain("overall cost from given input: 5");
  })
});
