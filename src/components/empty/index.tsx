import React, { ReactNode, FC } from 'react'
import classNames from 'classnames'
import { ElementProps } from '../../utils'
import './empty.scss'

const emptyIcon = require('./empty-icon.svg') as string
const classPrefix = `ah-empty`

export type EmptyProps = {
  imageUrl?: string
  imageStyle?: React.CSSProperties
  description?: ReactNode
} & ElementProps

const Empty: FC<EmptyProps> = props => {
  return (
    <div
      style={props.style}
      className={classNames(classPrefix, props.className)}
    >
      <img
        className={classNames(`${classPrefix}-image`)}
        src={props.imageUrl ? props.imageUrl : emptyIcon}
        alt='empty'
        style={props.imageStyle}
      />
      {props.description && (
        <div className={classNames(`${classPrefix}-description`)}>
          {props.description}
        </div>
      )}
    </div>
  )
}
export default Empty
