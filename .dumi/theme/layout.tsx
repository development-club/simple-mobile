import React from 'react'
import MobileLayout from 'dumi-theme-mobile/src/layouts'
import type { IRouteComponentProps } from '@umijs/types'
import './styles/layout.scss'

export default ({ children, ...props }: IRouteComponentProps<{}, {}>) => (
  <MobileLayout {...props}>
    <>
      <button>反馈</button>
      {children}
    </>
  </MobileLayout>
)
