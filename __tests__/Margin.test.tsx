import React from 'react'
import { render } from '@testing-library/react'
import { Margin } from '../src/Margin'

test('Margin', () => {
  const result = render(
    <Margin
      inline
      all="auto"
      horizontal={3}
      vertical={2}
      top={8}
      right={7}
      bottom={6}
      left={5}
    >
      <div>Hey</div>
    </Margin>
  )

  expect(result.getByText('Hey')).toBeTruthy()
  expect(result.container.firstElementChild?.className).toEqual(
    'inline-block m-auto mx-3 my-2 mt-8 mr-7 mb-6 ml-5'
  )
})
