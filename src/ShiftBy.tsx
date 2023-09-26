import * as React from 'react'
import { makeClassnames } from './utils'

export interface ShiftByProps {
  children: React.ReactNode
  x?: number
  y?: number
}

function maybeNegate(num: number) {
  return num < 0 ? '-' : ''
}

export function ShiftBy({ children, x = 0, y = 0, ...rest }: ShiftByProps) {
  const classnames = makeClassnames(
    [x, `${maybeNegate(x)}translate-x-${Math.abs(x)}-px`],
    [y, `${maybeNegate(y)}translate-y-${Math.abs(y)}-px`]
  )

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  )
}
