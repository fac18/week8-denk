const test = require('tape')
const { capitalise } = require('../views/helpers')

test('capitalise capitalises', t => {
  let actual = capitalise('hello');
  t.equal(actual.charAt(0),'H','h in hello should become upper case')
  t.equal(actual.charAt(1),'e','e in hello should remain lower case')
  t.end()
})
