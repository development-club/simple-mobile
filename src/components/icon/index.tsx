import * as React from 'react'
import classnames from 'classnames'
import { IconPropsType } from './PropsType'
import loadSprite from './loadSprite'
import './style.scss'
export type SvgProps = Omit<React.HTMLProps<SVGSVGElement>, 'size' | 'type'>
export interface IconProps extends IconPropsType, SvgProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  onClick?: React.MouseEventHandler<SVGSVGElement>
  svg?: object // 自定义 SVGElementHTMl对象  对象属性名 === type
}
export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md',
    svg: null,
  }

  componentDidMount() {
    loadSprite(this.props.svg)
  }

  render() {
    const { type, size, className, svg, ...restProps } = this.props

    const cname = classnames(
      'pf-icon',
      `pf-icon-${type}`,
      `pf-icon-${size}`,
      className
    )

    return (
      <svg className={cname} {...(restProps as any)}>
        <use xlinkHref={`#${type}`}></use>
      </svg>
    )
  }
}
