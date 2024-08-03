import classNames from 'classnames'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Positioner } from '../Positioner/Positioner'

import styles from './Spinner.module.scss'

type Sizes = 1

type Variants = 'primary'

const classesSize: Record<Sizes, string> = {
  1: styles.size_1,
}

const classesVariants: Record<Variants, string> = {
  primary: styles.primary,
}

type Props = ComponentPropsWithoutRef<'span'> & {
  size?: Sizes
  variant?: Variants
}

export const Spinner = forwardRef<HTMLSpanElement, Props>(
  ({ size = 1, className, variant = 'primary', ...props }, ref) => {
    const classes = [classesSize[size], classesVariants[variant]]

    return (
      <Positioner>
        <span {...props} ref={ref} className={classNames(styles.root, classes, className)}></span>
      </Positioner>
    )
  }
)
