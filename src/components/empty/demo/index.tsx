import React from 'react'
import { Empty, Space } from 'simple-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法'>
        <Empty />
      </DemoBlock>

      <DemoBlock title='自定义'>
        <Empty imageUrl='https://z.autoimg.cn/userGrowth/auto-answer-people/empty.png' />
      </DemoBlock>
    </>
  )
}
