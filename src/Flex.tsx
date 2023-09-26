import * as React from 'react'
import { maybe } from './utils'

export interface FlexProps {
  align?: 'baseline' | 'center' | 'end' | 'start' | 'stretch'
  children: React.ReactNode
  className?: string
  direction?: 'col' | 'col-reverse' | 'row' | 'row-reverse'
  gap?: number | string
  justify?:
    | 'around'
    | 'between'
    | 'center'
    | 'end'
    | 'evenly'
    | 'normal'
    | 'start'
    | 'stretch'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

export function Flex({
  align,
  children,
  className,
  direction = 'row',
  gap,
  justify,
  wrap,
  ...rest
}: FlexProps) {
  const classnames = [
    'flex',
    ...maybe(align, `items-${align}`),
    ...maybe(direction, `flex-${direction}`),
    ...maybe(gap, `gap-${gap}`),
    ...maybe(justify, `justify-${justify}`),
    ...maybe(wrap, `flex-${wrap}`),
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

export function Stack(props: Omit<FlexProps, 'direction'>) {
  return <Flex {...props} direction="col" />
}

export function Row(props: Omit<FlexProps, 'direction'>) {
  return <Flex {...props} direction="row" />
}

export interface FlexItemProps {
  align?: 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  basis?: number | string
  children: React.ReactNode
  className: string
  grow?: number
  shrink?: number
}

export function FlexItem({
  align,
  basis,
  children,
  className,
  grow,
  shrink,
  ...rest
}: FlexItemProps) {
  const classnames = [
    ...maybe(align, `self-${align}`),
    ...maybe(basis, `basis-${basis}`),
    ...maybe(grow, `grow-${grow}`),
    ...maybe(shrink, `shrink-${grow}`),
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
