import * as React from 'react'
import { makeClassnames } from './utils'

type MarginValue = 'auto' | number

export interface MarginProps {
  all?: MarginValue
  bottom?: MarginValue
  children: React.ReactNode
  horizontal?: MarginValue
  inline?: boolean
  left?: MarginValue
  right?: MarginValue
  top?: MarginValue
  vertical?: MarginValue
}

export function Margin({
  all,
  bottom,
  children,
  horizontal,
  inline = false,
  left,
  right,
  top,
  vertical,
  ...rest
}: MarginProps) {
  const el = inline ? 'span' : 'div'

  const classnames = makeClassnames(
    [inline, 'inline-block'],
    [all, `m-${all}`],
    [horizontal, `mx-${horizontal}`],
    [vertical, `my-${vertical}`],
    [top, `mt-${top}`],
    [right, `mr-${right}`],
    [bottom, `mb-${bottom}`],
    [left, `ml-${left}`]
  )

  return React.createElement(el, { className: classnames, ...rest }, children)
}
