import React from 'react'
import classNames from 'classnames'
import './importIcons.d'
import './icon.scss'
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, name, ...restProps } = props
  return (
    <span>
      <svg className={classNames('fui-icon', className)} {...restProps}>
        <use xlinkHref={`#${name}`} />
      </svg>
    </span>
  )
}

export default Icon
