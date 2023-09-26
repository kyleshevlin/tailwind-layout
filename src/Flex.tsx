import * as React from 'react'
import { makeClassnames } from './utils'

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
  const classnames = makeClassnames(
    'flex',
    [align, `items-${align}`],
    [direction, `flex-${direction}`],
    [gap, `gap-${gap}`],
    [justify, `justify-${justify}`],
    [wrap, `flex-${wrap}`],
    className
  )

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
  className?: string
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
  const classnames = makeClassnames(
    [align, `self-${align}`],
    [basis, `basis-${basis}`],
    [grow, `grow-${grow}`],
    [shrink, `shrink-${grow}`],
    className
  )

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  )
}
