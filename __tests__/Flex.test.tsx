import React from 'react'
import { render } from '@testing-library/react'
import { Flex, Stack, Row } from '../src/Flex'

test('Flex', () => {
  const result = render(
    <Flex
      align="center"
      className="foo bar"
      direction="row"
      gap={2}
      justify="center"
      wrap="wrap"
    >
      <div>Hey</div>
    </Flex>
  )

  expect(result.getByText('Hey')).toBeTruthy()
  expect(result.container.firstElementChild?.className).toEqual(
    'flex items-center flex-row gap-2 justify-center flex-wrap foo bar'
  )
})

test('Stack', () => {
  const result = render(
    <Stack align="center" gap={2} justify="center" wrap="wrap">
      <div>Hey</div>
    </Stack>
  )

  expect(result.getByText('Hey')).toBeTruthy()
  expect(result.container.firstElementChild?.className).toEqual(
    'flex items-center flex-col gap-2 justify-center flex-wrap'
  )
})

test('Row', () => {
  const result = render(
    <Row align="center" gap={2} justify="center" wrap="wrap">
      <div>Hey</div>
    </Row>
  )

  expect(result.getByText('Hey')).toBeTruthy()
  expect(result.container.firstElementChild?.className).toEqual(
    'flex items-center flex-row gap-2 justify-center flex-wrap'
  )
})
