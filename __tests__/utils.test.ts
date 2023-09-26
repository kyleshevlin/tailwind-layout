import { makeClassnames } from '../src/utils'

test('makeClassnames', () => {
  expect(
    makeClassnames(
      'a',
      [true, 'b'],
      [1, 'c'],
      ['test', 'd'],
      [{}, 'e'],
      [[], 'f'],
      [false, 'baz'],
      ['', 'baz'],
      [0, 'baz'],
      [null, 'baz']
    )
  ).toEqual('a b c d e f')
})
