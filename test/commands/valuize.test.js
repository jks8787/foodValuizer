const {expect, test} = require('@oclif/test')

describe('valuize', () => {
  test
  .stdout()
  .command(['valuize'])
  .it('runs valuize', ctx => {
    expect(ctx.stdout).to.contain('valuizing input: []')
  })

  test
  .stdout()
  .command(['valuize', '--input', "[{category: 'produce', cost: 1.00, usage: 'eaten'}]"])
  .it("runs valuize --input='[{category: 'produce', cost: 1.00, usage: 'eaten'}]'", ctx => {
    expect(ctx.stdout).to.contain("valuizing input: [{category: 'produce', cost: 1.00, usage: 'eaten'}]")
  })
})
