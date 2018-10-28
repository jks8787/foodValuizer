const {expect, test} = require('@oclif/test')

describe('goodbye', () => {
  test
  .stdout()
  .command(['goodbye'])
  .it('runs goodbye', ctx => {
    expect(ctx.stdout).to.contain('goodbye world')
  })

  test
  .stdout()
  .command(['goodbye', '--name', 'janice'])
  .it('runs goodbye --name janice', ctx => {
    expect(ctx.stdout).to.contain('goodbye janice')
  })
})
