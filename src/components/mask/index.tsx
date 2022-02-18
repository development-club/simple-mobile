import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { ElementProps, useLockBodyScroll } from 'simple-mobile'
import { useInitialized } from '../../utils'
import './mask.scss'
const classPrefix = `ah-mask`

export type MaskProps = {
  visible?: boolean // 是否显示
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void // 点击蒙层自身触发
  destroyOnClose?: boolean // 不显示时销毁内容
  forceRender?: boolean // 强制渲染内容
  disableBodyScroll?: boolean // 是否禁用body滚动
  opacity?: 'default' | 'dark' | number // 透明度
  getContainer?: HTMLElement | (() => HTMLElement) | undefined // 挂载容器 element,默认为当前节点
  afterClose?: () => void // 关闭后触发
} & ElementProps

let maskCount = 0 // 记录mask数量
export const Mask: React.FC<MaskProps> = props => {
  const cls = classNames(classPrefix, props.className, {
    [`${classPrefix}-hidden`]: !props.visible,
  })
  const initialized = useInitialized(props.visible || props.forceRender)
  const ref = useRef<HTMLDivElement>(null)
  const [lock, setLock] = useState(false) // 是否
  // 禁止 body 滚动 https://github.com/willmcpo/body-scroll-lock
  useEffect(() => {
    const element = ref.current!
    if (props.visible && props.disableBodyScroll) {
      useLockBodyScroll(props.visible)
      setLock(true)
      maskCount += 1
    } else {
      if (lock) {
        if (maskCount) maskCount -= 1
        if (!maskCount) useLockBodyScroll(props.visible || false)
        setLock(false)
      }
    }
  }, [props.visible, props.disableBodyScroll])

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.currentTarget === e.target) {
      props.onMaskClick?.(e)
    }
  }

  const opacity =
    props.opacity === 'default'
      ? 0.75
      : props.opacity === 'dark'
      ? 0.55
      : props.opacity

  const node = (
    <CSSTransition
      nodeRef={ref}
      in={props.visible}
      timeout={200}
      classNames={classPrefix}
      onExited={props.afterClose}
      unmountOnExit={props.destroyOnClose}
    >
      <div
        className={cls}
        onClick={handleClick}
        ref={ref}
        style={{
          ...props.style,
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        }}
      >
        {initialized && props.children}
      </div>
    </CSSTransition>
  )

  if (props.getContainer) {
    const container =
      typeof props.getContainer === 'function'
        ? props.getContainer()
        : props.getContainer
    return createPortal(node, container)
  }
  return node
}

Mask.defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  opacity: 'default',
  disableBodyScroll: true,
}

export default Mask
