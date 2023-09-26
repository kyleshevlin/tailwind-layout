import { maybe } from '../src/utils'

test('maybe', () => {
  expect(maybe(true, 'test')).toEqual(['test'])
  expect(maybe(false, 'test')).toEqual([])
})
