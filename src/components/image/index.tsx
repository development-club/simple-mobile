import React, { FC, ReactNode, useState } from 'react'
import classNames from 'classnames'
import { ElementProps, mergeProps } from 'utils'
import { Icon } from 'simple-mobile'
import './image.scss'
const classPrefix = `ah-image`

export type ImageProps = {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  style?: React.CSSProperties
  placeholder?: ReactNode
  fallback?: ReactNode
  onClick?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
} & ElementProps &
  Pick<
    React.ImgHTMLAttributes<HTMLImageElement>,
    | 'crossOrigin'
    | 'decoding'
    | 'loading'
    | 'referrerPolicy'
    | 'sizes'
    | 'srcSet'
    | 'useMap'
  >

const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={`${classPrefix}-tip`}>
      <Icon type='picture' className='anticon' />
    </div>
  ),
  fallback: (
    <div className={`${classPrefix}-tip`}>
      <Icon type='disconnect' className='anticon' />
    </div>
  ),
}

const Image: FC<ImageProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  function renderInner() {
    if (failed) {
      return props.fallback
    }
    return (
      <>
        {!loaded && props.placeholder}
        <img
          className={`${classPrefix}-img`}
          src={props.src}
          alt={props.alt}
          onClick={props.onClick}
          onLoad={() => {
            setLoaded(true)
          }}
          onError={e => {
            setFailed(true)
            props.onError?.(e)
          }}
          style={{
            objectFit: props.fit,
            display: loaded ? 'block' : 'none',
          }}
          crossOrigin={props.crossOrigin}
          decoding={props.decoding}
          loading={props.loading}
          referrerPolicy={props.referrerPolicy}
          sizes={props.sizes}
          srcSet={props.srcSet}
          useMap={props.useMap}
        />
      </>
    )
  }

  return (
    <div
      className={classNames(classPrefix, props.className)}
      style={{
        width: props.width,
        height: props.height,
        ...props.style,
      }}
    >
      {renderInner()}
    </div>
  )
}

export default Image
