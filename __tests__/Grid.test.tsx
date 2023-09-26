import React from 'react'
import { render } from '@testing-library/react'
import { Grid } from '../src/Grid'

test('Grid', () => {
  const result = render(
    <Grid cols={2} rows={4} gap={6}>
      <div>Hey</div>
    </Grid>
  )

  expect(result.getByText('Hey')).toBeTruthy()
  expect(result.container.firstElementChild?.className).toEqual(
    'grid grid-cols-2 gap-6 grid-rows-4'
  )
})
