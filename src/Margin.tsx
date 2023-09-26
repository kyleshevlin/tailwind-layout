import * as React from 'react'
import { maybe } from './utils'

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

  const classnames = [
    ...maybe(inline, 'inline-block'),
    ...maybe(all, `m-${all}`),
    ...maybe(horizontal, `mx-${horizontal}`),
    ...maybe(vertical, `my-${vertical}`),
    ...maybe(top, `mt-${top}`),
    ...maybe(right, `mr-${right}`),
    ...maybe(bottom, `mb-${bottom}`),
    ...maybe(left, `ml-${left}`),
  ]
    .join(' ')
    .trim()

  return React.createElement(el, { className: classnames, ...rest }, children)
}
