import { Align } from './types'

import styles from './Typography.module.scss'

export const alignClasses: Record<Align, string> = {
  left: styles.align_left,
  right: styles.align_right,
  center: styles.align_center,
}
