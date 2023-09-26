import * as React from 'react'
import { maybe } from './utils'

export interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 'none' | number
  gap?: number | string
  rows?: 'none' | number
}

export function Grid({
  children,
  className,
  gap,
  cols,
  rows,
  ...rest
}: GridProps) {
  const classnames = [
    'grid',
    ...maybe(cols, `grid-cols-${cols}`),
    ...maybe(gap, `gap-${gap}`),
    ...maybe(rows, `grid-rows-${rows}`),
    className,
  ]
    .join(' ')
    .trim()

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  )
}
