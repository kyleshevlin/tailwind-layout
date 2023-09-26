import * as React from 'react'
import { maybe } from './utils'

export interface ShiftByProps {
  children: React.ReactNode
  x?: number
  y?: number
}

function maybeNegate(num: number) {
  return num < 0 ? '-' : ''
}

export function ShiftBy({ children, x = 0, y = 0 }: ShiftByProps) {
  const classnames = [
    ...maybe(x, `${maybeNegate(x)}translate-x-${Math.abs(x)}-px`),
    ...maybe(y, `${maybeNegate(y)}translate-y-${Math.abs(y)}-px`),
  ]
    .join(' ')
    .trim()

  return <div className={classnames}>{children}</div>
}
