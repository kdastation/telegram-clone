import classNames from 'classnames'
import { ComponentPropsWithoutRef } from 'react'
import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'

import { alignClasses } from '../classes'
import { Align } from '../types'

import styles from './Text.module.scss'

type Sizes = 1 | 2 | 3

type Style = 'italic' | 'normal'

type Weight = 400 | 700

const sizesClasses: Record<Sizes, string> = {
  '1': styles.size_1,
  '2': styles.size_2,
  '3': styles.size_3,
}

const fontStyleClasses: Record<Style, string> = {
  italic: styles.italic,
  normal: styles.normal,
}

const weightClasses: Record<Weight, string> = {
  '400': styles.weight_400,
  '700': styles.weight_700,
}

type TextOwnProps = {
  size?: Sizes
  align?: Align
  color?: string
  weight?: Weight
  fontStyle?: Style
}

type TextElement = React.ElementRef<'span'>

type TextAsChildProps = { asChild: true; as?: never } & ComponentPropsWithoutRef<'span'>
type TextSpanProps = { as?: 'span'; asChild?: false } & ComponentPropsWithoutRef<'span'>
type TextDivProps = { as: 'div'; asChild?: false } & ComponentPropsWithoutRef<'div'>
type TextLabelProps = { as: 'label'; asChild?: false } & ComponentPropsWithoutRef<'label'>
type TextPProps = { as: 'p'; asChild?: false } & ComponentPropsWithoutRef<'p'>
type TextProps = TextOwnProps &
  (TextAsChildProps | TextSpanProps | TextDivProps | TextLabelProps | TextPProps)

const Text = React.forwardRef<TextElement, TextProps>(
  (
    {
      children,
      className,
      asChild,
      as: Tag = 'span',
      size = 2,
      align = 'left',
      style,
      color,
      weight = 400,
      fontStyle = 'normal',
      ...props
    },
    ref
  ) => {
    const classes = [
      sizesClasses[size],
      alignClasses[align],
      weightClasses[weight],
      fontStyleClasses[fontStyle],
    ]

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

Text.displayName = 'Text'

export { Text }
