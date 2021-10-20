import React, { FC, useState } from 'react'
import classNames from 'classnames'
import { Button } from 'simple-mobile'

const classPrefix = 'ah-dialog'
export type Action = {
  key: string | number
  text: string
  disabled?: boolean
  danger?: boolean
  bold?: boolean
  className?: string
  onClick?: () => void | Promise<void>
}

export const DialogActionButton: FC<{
  action: Action
  onAction: () => void | Promise<void>
}> = props => {
  const { action } = props

  const [loading, setLoading] = useState(false)
  const btn_bold = `${classPrefix}-button-bold`
  return (
    <Button
      key={action.key}
      onClick={async () => {
        setLoading(true)
        try {
          await action.onClick?.()
          await props.onAction?.()
        } catch (e) {
          setLoading(false)
          throw e
        }
        setLoading(false)
      }}
      className={classNames(
        `${classPrefix}-button`,
        {
          btn_bold: action.bold,
        },
        action.className
      )}
      fill='none'
      block
      color={action.danger ? 'danger' : 'primary'}
      loading={loading}
      disabled={action.disabled}
    >
      {action.text}
    </Button>
  )
}
