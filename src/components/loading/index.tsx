import React, { memo } from 'react'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import './loading.scss'
const classPrefix = `ah-loading`

const colorRecord: Record<string, string> = {
  default: 'var(--ah-color-weak)',
  primary: 'var(--ah-color-primary)',
  white: 'var(--ah-color-white)',
}

export interface LoadingProps {
  size?: 'mini' | 'small' | 'middle' | 'large'
  color?: 'default' | 'primary' | 'white' | string
}

const defaultProps = {
  size: 'middle',
  color: 'default',
}

const Loading = memo<LoadingProps>(p => {
  const props = mergeProps(defaultProps, p)
  const style: any = {
    '--color': colorRecord[props.color] ?? props.color,
  }
  return (
    <div
      style={style}
      className={classNames(classPrefix, `${classPrefix}-${props.size}`)}
    >
      <div className={`${classPrefix}-dot`} />
      <div className={`${classPrefix}-dot`} />
      <div className={`${classPrefix}-dot`} />
    </div>
  )
})
export default Loading
