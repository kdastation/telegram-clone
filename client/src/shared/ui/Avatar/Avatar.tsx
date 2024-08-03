import classNames from 'classnames'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { AvatarFallback } from '@radix-ui/react-avatar'
import * as AvatarRadix from '@radix-ui/react-avatar'

import DefaultImage from '../../assets/images/default.png'
import { Spinner } from '../Loader/Spinner'

import styles from './Avatar.module.scss'

type Sizes = 3 | 4 | 5 | 6

type Radius = 'none' | 'full'

const classesSize: Record<Sizes, string> = {
  '3': styles.size_3,
  '4': styles.size_4,
  '5': styles.size_5,
  '6': styles.size_6,
}

const classesRadius: Record<Radius, string> = {
  none: styles.radius_none,
  full: styles.radius_full,
}

type AvatarImplElement = ElementRef<typeof AvatarRadix.Image>
type ImageLoadingStatus = Parameters<
  Required<AvatarRadix.AvatarImageProps>['onLoadingStatusChange']
>[0]

type Props = Omit<ComponentPropsWithoutRef<typeof AvatarRadix.Image>, 'asChild' | 'className'> & {
  size?: Sizes
  radius?: Radius
  imageClassName?: string
}

export const Avatar = forwardRef<AvatarImplElement, Props>(
  ({ size = 5, radius = 'full', imageClassName, ...imageProps }, ref) => {
    const [status, setStatus] = useState<ImageLoadingStatus>('idle')

    const classes = [classesSize[size], classesRadius[radius]]

    const handleLoadingStatusChange = (statusChange: ImageLoadingStatus) => {
      imageProps.onLoadingStatusChange?.(statusChange)
      setStatus(statusChange)
    }

    return (
      <AvatarRadix.Root className={classNames(styles.root, classes)}>
        <AvatarRadix.Image
          {...imageProps}
          ref={ref}
          className={classNames(styles.image, imageClassName)}
          onLoadingStatusChange={handleLoadingStatusChange}
        />

        {status === 'idle' || status === 'loading' ? (
          <span className={styles.fallback}>
            <Spinner />
          </span>
        ) : null}

        {status === 'error' && (
          <AvatarFallback className={styles.fallback}>
            <img className={styles.default_img} src={DefaultImage} alt={'fallback'} />
          </AvatarFallback>
        )}
      </AvatarRadix.Root>
    )
  }
)
