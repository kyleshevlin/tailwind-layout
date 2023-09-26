import * as React from 'react'
import { makeClassnames } from './utils'

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
  const classnames = makeClassnames(
    'grid',
    [cols, `grid-cols-${cols}`],
    [gap, `gap-${gap}`],
    [rows, `grid-rows-${rows}`],
    className
  )

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  )
}
