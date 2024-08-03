import classNames from 'classnames'
import { ComponentPropsWithoutRef } from 'react'
import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'

import { alignClasses } from '../classes'
import { Align } from '../types'

import styles from './Heading.module.scss'

type HeadingElement = React.ElementRef<'h1'>

type Sizes = 1 | 2 | 3 | 4

const sizesClasses: Record<Sizes, string> = {
  '1': styles.size_1,
  '2': styles.size_2,
  '3': styles.size_3,
  '4': styles.size_4,
}

type HeadingOwnProps = {
  color?: string
  size?: Sizes
  align?: Align
}

type HeadingAsChildProps = { asChild: true; as?: never } & ComponentPropsWithoutRef<'h1'>
type HeadingAsProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  asChild?: false
} & ComponentPropsWithoutRef<'h1'>

type HeadingProps = HeadingOwnProps & (HeadingAsChildProps | HeadingAsProps)

const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  (
    {
      children,
      className,
      asChild,
      as: Tag = 'h3',
      color,
      size = 1,
      style,
      align = 'left',
      ...props
    },
    ref
  ) => {
    const classes = [sizesClasses[size], alignClasses[align]]

    return (
      <Slot
        {...props}
        style={{
          color: color,
          ...style,
        }}
        ref={ref}
        className={classNames(classes, className)}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    )
  }
)
Heading.displayName = 'Heading'

export { Heading }
