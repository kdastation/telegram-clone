import { ReactNode } from 'react'

import styles from './Positioner.module.scss'

type Props = {
  children: ReactNode
}

export const Positioner = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>
}
