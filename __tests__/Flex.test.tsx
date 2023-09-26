import React from 'react'
import { render } from '@testing-library/react'
import { Flex, Stack, Row, FlexItem } from '../src/Flex'

test('Flex', () => {
  const result = render(
    <Flex
      align="center"
      className="foo bar"
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

test('FlexItem', () => {
  const result = render(
    <FlexItem align="center" basis="1/2" grow={1} shrink={1}>
      <div>Hey</div>
    </FlexItem>
  )

  expect(result.getByText('Hey')).toBeTruthy()
  expect(result.container.firstElementChild?.className).toEqual(
    'self-center basis-1/2 grow-1 shrink-1'
  )
})
