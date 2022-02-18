import React, { useEffect, useState, useRef, FC } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { Mask } from 'simple-mobile'
import {
  ElementProps,
  useInitialized,
  mergeProps,
  GetContainer,
  renderToContainer,
} from '../../utils'
import './popup.scss'
const classPrefix = `ah-popup`

export type PopupProps = {
  visible?: boolean
  mask?: boolean
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  destroyOnClose?: boolean
  forceRender?: boolean
  getContainer?: GetContainer
  afterShow?: () => void
  afterClose?: () => void
  position?: 'bottom' | 'top' | 'left' | 'right'
  bodyClassName?: string
  bodyStyle?: React.CSSProperties
  maskClassName?: string
  maskStyle?: React.CSSProperties
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  disableBodyScroll?: boolean
} & ElementProps

const defaultProps = {
  position: 'bottom',
  visible: false,
  getContainer: () => document.body,
  mask: true,
  disableBodyScroll: true,
}

const Popup: FC<PopupProps> = p => {
  const props = mergeProps(defaultProps, p)
  // 动画执行完，才隐藏最外层
  const [hidden, setHidden] = useState(!props.visible)
  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (props.visible) {
      setHidden(false)
    }
  }, [props.visible])

  const afterClose = () => {
    setHidden(true)
    props.afterClose?.()
  }

  const cls = classNames(classPrefix, props.className, {
    [`${classPrefix}-hidden`]: hidden,
  })

  const bodyCls = classNames(
    `${classPrefix}-body`,
    props.bodyClassName,
    {
      [`${classPrefix}-body-hidden`]: !props.visible,
    },
    `${classPrefix}-body-position-${props.position}`
  )

  const initialized = useInitialized(props.visible || props.forceRender)

  const node = (
    <div className={cls} style={props.style} onClick={props.onClick}>
      {props.mask && (
        <Mask
          visible={props.visible}
          onMaskClick={props.onMaskClick}
          className={props.maskClassName}
          style={props.maskStyle}
          disableBodyScroll={props.disableBodyScroll}
        />
      )}
      <CSSTransition
        nodeRef={nodeRef}
        classNames={`${classPrefix}-body`}
        in={props.visible}
        timeout={200}
        onEntered={props.afterShow}
        onExited={afterClose}
        unmountOnExit={props.destroyOnClose}
      >
        <div className={bodyCls} style={props.bodyStyle} ref={nodeRef}>
          {initialized && props.children}
        </div>
      </CSSTransition>
    </div>
  )
  return renderToContainer(props.getContainer, node)
}

export default Popup
