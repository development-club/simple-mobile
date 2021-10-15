import React, { FC, useEffect } from 'react'
import './index.scss'

interface Props {
  title: string
  padding?: string
  border?: string
  background?: string
}

export const DemoBlock: FC<Props> = props => {
  useEffect(() => {
    document.body.style.background = '#f5f5f5'
  }, [])
  return (
    <div className='demoBlock'>
      <div className='title'>{props.title}</div>
      <div
        className='content'
        style={{
          padding: props.padding,
          background: props.background,
          border: props.border,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

DemoBlock.defaultProps = {
  padding: '12px 12px',
  background: '#ffffff',
}
