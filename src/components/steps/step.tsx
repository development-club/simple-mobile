import React, { FC } from 'react'
import classNames from 'classnames'

const classPrefix = `ah-step`

export interface StepProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  status?: 'wait' | 'process' | 'finish' | 'error'
}

export const Step: FC<StepProps> = props => {
  const { title, description, icon, status = 'wait' } = props

  return (
    <div
      className={classNames(
        `${classPrefix}`,
        `${classPrefix}-status-${status}`
      )}
    >
      <div className='ah-step-indicator'>
        <div className={`${classPrefix}-icon-container`}>{icon}</div>
      </div>
      <div className='ah-step-content'>
        <div className='ah-step-title'>{title}</div>
        {!!description && (
          <div className='ah-step-description'>{description}</div>
        )}
      </div>
    </div>
  )
}
