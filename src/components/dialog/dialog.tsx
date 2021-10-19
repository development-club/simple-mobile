import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { mergeProps } from 'utils'
import { Mask, Space, Image, Icon } from 'simple-mobile'
import { Action, DialogActionButton } from './dialog-action-button'

const classPrefix = 'ah-dialog'

export type DialogProps = {
  afterClose?: () => void
  image?: string
  opacity?: number
  header?: ReactNode
  title?: ReactNode
  content?: ReactNode
  actions?: (Action | Action[])[]
  onAction?: (action: Action, index: number) => void | Promise<void>
  closeOnAction?: boolean
  onClose?: () => void
  closeOnMaskClick?: boolean
  visible?: boolean
  getContainer?: HTMLElement | (() => HTMLElement) | undefined
  bodyStyle?: React.CSSProperties
  bodyClassName?: string
  maskStyle?: React.CSSProperties
  maskClassName?: string
  closeBtnContent?: ReactNode // 自定义关闭按钮
  closeBtnClassName?: string // 自定义关闭按钮ClassName, 提供 bottom 底部居中， right 右上角 样式
  visibleCloseBtn?: boolean // 是否显示关闭按钮
}
const defaultProps = {
  actions: [],
  closeOnAction: false,
  closeOnMaskClick: false,
  visibleCloseBtn: false,
}

const Dialog: FC<DialogProps> = p => {
  const props = mergeProps(defaultProps, p)

  return (
    <Mask
      opacity={props.opacity}
      visible={props.visible}
      destroyOnClose
      getContainer={props.getContainer}
      afterClose={props.afterClose}
      onMaskClick={props.closeOnMaskClick ? props.onClose : undefined}
      style={props.maskStyle}
      className={classNames(`${classPrefix}-mask`, props.maskClassName)}
    >
      <div onClick={e => e.stopPropagation()} className={`${classPrefix}-wrap`}>
        <div
          style={props.bodyStyle}
          className={classNames(`${classPrefix}-body`, props.bodyClassName)}
        >
          {!!props.image && (
            <Image src={props.image} alt='dialog header image' width='100%' />
          )}
          <div className={`${classPrefix}-content`}>
            <Space direction='vertical' block>
              {!!props.header && (
                <div className={`${classPrefix}-content-header-wrapper`}>
                  <div className={`${classPrefix}-content-header`}>
                    {props.header}
                  </div>
                </div>
              )}
              {!!props.title && (
                <div className={`${classPrefix}-content-title`}>
                  {props.title}
                </div>
              )}
              {!!props.content && (
                <div className={`${classPrefix}-content-message-wrapper`}>
                  <div className={`${classPrefix}-content-message`}>
                    {props.content}
                  </div>
                </div>
              )}
            </Space>
          </div>
          <div className={`${classPrefix}-footer`}>
            {props.actions.map((row, index) => {
              const actions = Array.isArray(row) ? row : [row]
              return (
                <div className={`${classPrefix}-action-row`} key={index}>
                  {actions.map((action, index) => (
                    <DialogActionButton
                      key={action.key}
                      action={action}
                      onAction={async () => {
                        await props.onAction?.(action, index)
                        if (props.closeOnAction) {
                          props.onClose?.()
                        }
                      }}
                    />
                  ))}
                </div>
              )
            })}
          </div>
        </div>
        {props.visibleCloseBtn && (
          <div
            className={classNames(
              `${classPrefix}-close`,
              props.closeBtnClassName
            )}
            onClick={props.onClose}
          >
            {props.closeBtnContent ? (
              props.closeBtnContent
            ) : (
              <Icon
                type='close_circle'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  width: '32px',
                  height: '32px',
                }}
              />
            )}
          </div>
        )}
      </div>
    </Mask>
  )
}

export default Dialog
