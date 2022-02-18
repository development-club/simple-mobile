import React from 'react'
import { Image, Space, Icon } from 'simple-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Icon name='disconnect' />
      </DemoBlock>
      <DemoBlock title='关闭'>
        <Space wrap direction='horizontal'>
          <Icon name='close-circle' />
          <Icon name='close-square' />
          <Icon name='close' />
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义圆角'>
        <Space wrap direction='horizontal'></Space>
      </DemoBlock>
      <DemoBlock title='加载失败'>
        <Icon name='disconnect' />
      </DemoBlock>
    </>
  )
}
