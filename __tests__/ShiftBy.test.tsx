import React from 'react'
import { render } from '@testing-library/react'
import { ShiftBy } from '../src/ShiftBy'

describe('ShiftBy', () => {
  it('should return no className if no args are provided', () => {
    const result = render(
      <ShiftBy>
        <div>Hey</div>
      </ShiftBy>
    )

    expect(result.container.firstElementChild?.className).toEqual('')
  })

  it('should omit classname for omitted prop', () => {
    const result = render(
      <ShiftBy x={2}>
        <div>Hey</div>
      </ShiftBy>
    )

    expect(result.container.firstElementChild?.className).toEqual(
      'translate-x-2-px'
    )
  })

  it('should negate numbers correctly', () => {
    const result = render(
      <ShiftBy x={2} y={-4}>
        <div>Hey</div>
      </ShiftBy>
    )

    expect(result.getByText('Hey')).toBeTruthy()
    expect(result.container.firstElementChild?.className).toEqual(
      'translate-x-2-px -translate-y-4-px'
    )
  })
})
