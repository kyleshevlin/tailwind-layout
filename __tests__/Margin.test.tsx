import React from 'react'
import { render } from '@testing-library/react'
import { Margin } from '../src/Margin'

describe('Margin', () => {
  it('should default to block', () => {
    const result = render(
      <Margin
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
      'm-auto mx-3 my-2 mt-8 mr-7 mb-6 ml-5'
    )
  })

  it('should add correct class for inline prop', () => {
    const result = render(
      <Margin inline horizontal={1}>
        <div>Hey</div>
      </Margin>
    )

    expect(result.container.firstElementChild?.className).toEqual(
      'inline-block mx-1'
    )
  })
})
