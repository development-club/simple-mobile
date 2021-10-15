import React, { FC, ReactNode } from 'react'
import './index.scss'

export const DemoDescription: FC<{
  content?: ReactNode
}> = props => {
  return (
    <div className='demoDescription'>{props.content || props.children}</div>
  )
}
